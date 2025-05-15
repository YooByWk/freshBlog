// islands/Editor.tsx

import { useEffect, useRef, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { LuLoaderCircle } from "@preact-icons/lu";
import { ImageAPI } from "../routes/api/image.ts";
import { PostAPI } from "../routes/api/post.ts";

import ModalComponent from "../components/ModalComponent.tsx";
// import { ModalComponent } from "../components/ModalComponent.tsx";


export default function Editor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<any>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [isEditorLoading, setIsEditorLoading] = useState<boolean>(true);
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>("");

  const COMPRESSION_BYTES = 800 * 1024;

  async function processImages(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const imgElements = doc.querySelectorAll('img');
    const promises: Promise<void>[] = [];
    const imageIds: (string | number)[] = [];

    imgElements.forEach((img, idx) => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('data:')) {
        const blobPromise = fetch(src)
          .then(res => res.blob()) // data: URL -> Blob 변환
          .then(async (blob) => {
            let fileToUpload: File; // 최종 업로드할 File 객체 (원본 또는 압축본)

            //  이미지 크기 확인 및 조건부 압축
            if (blob.size > COMPRESSION_BYTES) {
              console.log(`Image ${idx} (${(blob.size / 1024).toFixed(2)} KB) is larger than threshold, compressing...`);

              //  이미지 압축 및 리사이징 로직 (Canvas 사용)
              const compressedBlob = await new Promise<Blob | null>((resolve) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                  const imgElement = new Image();
                  imgElement.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // 이미지 리사이징 
                    const maxWidth = 1024;
                    let { width, height } = imgElement;

                    if (width > maxWidth) {
                      height = Math.round(height * (maxWidth / width));
                      width = maxWidth;
                    }

                    canvas.width = width;
                    canvas.height = height;

                    ctx?.drawImage(imgElement, 0, 0, width, height);


                    const outputFormat = 'image/jpeg'; // 압축률을 위해 jpeg 사용 (png는 무손실 압축)
                    const compressionQuality = 0.7; // 0.7 또는 0.8 정도가 화질과 크기의 균형이 좋음

                    canvas.toBlob(resolve, outputFormat, compressionQuality);
                  };
                  imgElement.src = event.target?.result as string;
                };
                reader.readAsDataURL(blob);
              });

              if (!compressedBlob) {
                console.error("Image compression failed for image", idx);
                // 압축 실패 시 원본 Blob을 사용하거나 에러 처리
                fileToUpload = new File([blob], `image${idx}.png`, { type: blob.type }); // Fallback to original
              } else {
                console.log(`Image ${idx} compressed size: ${(compressedBlob.size / 1024).toFixed(2)} KB`);
                // 압축된 Blob으로 새로운 File 객체 생성
                const originalFilename = `image${idx}`;
                const fileExtension = compressedBlob.type.split('/')[1] || 'jpeg'; // 압축 결과 타입 사용 또는 기본값
                fileToUpload = new File([compressedBlob], `${originalFilename}.${fileExtension}`, { type: compressedBlob.type });
              }

            } else {
              console.log(`Image ${idx} (${(blob.size / 1024).toFixed(2)} KB) is within limit, no compression needed.`);
              // ✅ 압축 불필요, 원본 Blob으로 File 객체 생성
              const originalFilename = `image${idx}`;
              const fileExtension = blob.type.split('/')[1] || 'png'; // 원본 타입 사용 또는 기본값
              fileToUpload = new File([blob], `${originalFilename}.${fileExtension}`, { type: blob.type });
            }

            // ✅ 최종 결정된 fileToUpload 객체를 사용하여 이미지 업로드 API 호출
            const imageRes = await ImageAPI.uploadImage(fileToUpload, title, slug);
            img.setAttribute('src', imageRes.url); // 업로드된 이미지 URL로 src 변경
            imageIds.push(imageRes.id);

            console.log(`Image ${idx} uploaded URL: ${imageRes.url}`);

          })
          .catch(err => console.error("Image processing or upload failed:", err));
        promises.push(blobPromise); // Promise 목록에 추가
      }
    });
    // ... 모든 Promise 대기 및 결과 반환 ...
    await Promise.all(promises);

    return {
      updatedHtml: doc.body.innerHTML,
      imageIds
    };
  }

  const onSave = async () => {
    // console.log("저장하기");
    // wysiwyg 에디터 내용 출력 -> 저장으로 수정
    const htmlContent = quillRef.current.root.innerHTML;
    if (!title) {
      alert("제목을 입력해주세요");
      return;
    }

    if ((htmlContent.length) < 50) {
      alert("내용을 입력해주세요");
      return;
    }

    if (!slug) {
      alert("슬러그를 입력해주세요");
      return;
    }
    // 슬러그가 영문이나 숫자가 아닌 경우 반환
    if (slug.match(/[^a-zA-Z0-9-_]/)) {
      alert("슬러그는 영문, 숫자, - 또는 _ 만 가능합니다.");
      return;
    }
    // 이미지 우선 저장
    const { updatedHtml, imageIds } = await processImages(htmlContent);
    setContent(updatedHtml); // 업데이트 된 HTML 반영이긴 함

    // 저장된 이미지 결과를 통한 POST 요청

    const postData = {
      title,
      content: updatedHtml,
      slug,
      summary
    };
    const postRes = await PostAPI.createPost(postData, imageIds);

    if (postRes.slug) {
      globalThis.location.href = `/blog/${slug}`;
    }

    // 생성된 이미지들을 해당 포스트에 연결해야함
    // console.log(htmlContent, "htmlContent");
    // setContent(quillRef.current.root.innerHTML);
    // console.log(quillRef.current.root.innerHTML);
  };




  useEffect(() => {
    import("quill").then(({ default: Quill }) => {
      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'formula'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-2' }, { 'indent': '+2' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        ['clean']
      ];

      if (editorRef.current) {
        const quill = new Quill(editorRef.current, {
          theme: "snow",

          modules: {
            syntax: true,
            toolbar: toolbarOptions,
          }
        });
        quillRef.current = quill;
        setIsEditorLoading(false);
        console.log("설정 완료");
        /*
        // 이미지 복붙! 
        editorRef.current.addEventListener('paste', async (e: ClipboardEvent) => {
          e.stopPropagation();
          e.preventDefault();
          if (!e.clipboardData) return;
          console.log(e, "이벤트 감지");
          const items = e.clipboardData.items;
          console.log(items, "아이템");
          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            console.log(items[i], "아이템 반복");
            if (item.type.startsWith('image/')) {
              console.log('이것은 이미지군요!');
              const file = item.getAsFile();
              if (file) {
                console.log(file, "파일");
                // buffer로 변환? 
                try {
                  setIsImageUploading(true);
                  const imageUrl = await uploadImage(file);
                  // 이미지
                  const range = quillRef.current.getSelection(true);
                  console.log(range, '현위치');
                  quillRef.current.insertEmbed(range.index, 'image', imageUrl);
                  quillRef.current.setSelection(range.index + 1);

                } catch (err) {
                  console.error(err);
                }
                finally {
                  setIsImageUploading(false);
                }
              } // if file 종료
            } // if 종료
          }
        });
        */ // 이미지 업로드 끝

      }
    });
  }, []);

  return (
    <div class="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 min-h-24 relative">
      <h1 class="font-bold text-lg mb-4">블로그 포스팅하기~</h1>
      {/* 에디터 컨테이너 */}
      <div style="height: 70vh; position: relative;">
        <div className="flex gap-4">
          <input
            class="border border-gray-300 rounded-lg p-2 mb-4 w-5/6 dark:bg-slate-800 dark:text-white"
            type="text"
            onChange={(e) => setTitle(e.currentTarget.value)}
            placeholder="제목을 입력해주세요" />
          <input
            class="border border-gray-300 rounded-lg p-2 mb-4 w-1/6 dark:bg-slate-950 dark:text-white"
            type="text"
            onChange={(e) => setSlug(e.currentTarget.value)}
            placeholder="slug" />
        </div>
        <div>
          <textarea label='요약!'
            class="border border-gray-300 rounded-lg p-2 mb-4 w-full h-16 dark:bg-slate-800 dark:text-white"
            onInput={(e) => setSummary(e.currentTarget.value)}
          >
          </textarea>
        </div>
        <div ref={editorRef} style="height: 72.5vh; max-height:75vh"></div>
        {/* 에디터 로딩 스피너 오버레이 */}
        {isEditorLoading && (
          <div class="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 z-10">
            <Button type="button" class="bg-indigo-500 flex justify-center items-center p-6 rounded-lg" disabled>
              <LuLoaderCircle class="animate-spin mr-4 text-lg" />
              <p class="text-lg">에디터 로딩중...</p>
            </Button>
          </div>
        )}

        {/* 이미지 업로드 스피너 오버레이 */}
        {isImageUploading && (
          <div class="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 z-20">
            <LuLoaderCircle class="animate-spin text-3xl" />
          </div>
        )}
        {/* 버튼 영역 */}
        <div class="flex justify-end mt-2 gap-4">
          <Button class="rounded-full bg-gray-400 px-4 py-2 text-sm font-medium" onClick={() => console.log("취소하기 버튼 클릭됨")}>
            취소하기
          </Button>
          <Button onClick={onSave} class="rounded-full bg-gradient-to-r from-warm-400 to-warm-600 dark:from-pink-500 dark:to-purple-600 
          px-4 py-2 text-sm font-medium text-white hover:shadow-lg hover:shadow-warm-500/25 
          dark:hover:shadow-pink-500/25 transition-all duration-300">
            저장하기
          </Button>
        </div>
      </div>
    </div>
  );
}
