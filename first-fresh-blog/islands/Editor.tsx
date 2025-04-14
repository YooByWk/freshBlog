// islands/Editor.tsx

import { useEffect, useRef, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { LuLoaderCircle } from "@preact-icons/lu";


export default function Editor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<any>(null);

  const [content, setContent] = useState<string>("");
  const [isEditorLoading, setIsEditorLoading] = useState<boolean>(true);
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);

  const onSave = () => {
    console.log("저장하기");
    // wysiwyg 에디터 내용 출력 -> 저장으로 수정
    setContent(quillRef.current.root.innerHTML);
    console.log(quillRef.current.root.innerHTML);
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
        // 이미지 복붙! 
        editorRef.current.addEventListener('paste', async (e: ClipboardEvent) => {
          if (!e.clipboardData) return;
          console.log(e, "이벤트 감지");
          const items = e.clipboardData.items;
          console.log(items, "아이템");
          for (let i = 0; i < items.length; i++) {
            console.log(items[i], "아이템 반복");
          }
        });
      }
    });
  }, []);

  return (
    <div class="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 min-h-24 relative">
      {/* 에디터 타이틀 및 버튼 등은 항상 렌더링 */}
      <h1 class="font-bold text-lg mb-4">블로그 포스팅하기~</h1>

      {/* 에디터 컨테이너 */}
      <div style="height: 75vh; position: relative;">
        <div ref={editorRef} style="height: 100%;"></div>
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
        <div class="flex justify-end mt-8 gap-4">
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
