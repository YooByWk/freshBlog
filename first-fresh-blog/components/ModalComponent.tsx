// components/Modal.tsx
import { useState } from 'preact/hooks'; // Preact 훅 사용
import { CommonAPI } from "../routes/api/common.ts";
import { encodeHex } from 'jsr:@std/encoding@~0.220.1/hex';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTitle: string; // 초기값 prop 추가
  isBanger: boolean;
  setIsBanger: () => void;
}

function ModalComponent({
  isOpen,
  onClose,
  initialTitle,
  setIsBanger,
  isBanger
}: ModalProps) {
  // 내부 상태 관리를 위해 useState 사용
  const [password, setPassword] = useState('');


  // 모달이 열릴 때마다 초기값을 다시 설정 (선택 사항, 필요에 따라 사용)
  // useEffect(() => {
  //   setTitle(initialTitle);
  //   setContent(initialContent);
  //   setSlug(initialSlug);
  //   setIsBanger(initialIsBanger);
  // }, [initialTitle, initialContent, initialSlug, initialIsBanger]);


  if (!isOpen) {
    return null; // isOpen이 false면 아무것도 렌더링하지 않음
  }

  const handleSubmit = async () => {
    const hashFromServer = await CommonAPI.getP();
    const hashPw = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password));
    const hexPw = encodeHex(hashPw);
    console.log(hashFromServer.encoded);
    console.log(hexPw);
    console.log();
    // onSave({ title, content, slug, isBanger });
    if (hexPw === hashFromServer.encoded) {
      setIsBanger();
      onClose();
    }
    else {
      window.alert("비밀번호가 일치하지 않습니다.");
    }
    // 저장 후 모달 닫기 또는 상태 초기화 등 추가 작업 수행 가능
    // onClose(); // 저장이 성공하면 모달을 닫을 수 있습니다.
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      {/* 모달 컨텐츠 영역 - 클릭 이벤트 전파 방지 */}
      <div
        className="bg-white rounded-lg p-6 max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()} // 클릭 이벤트가 배경으로 전파되지 않도록 함
      >
        <h2 className="text-xl font-bold mb-4">게시물 편집</h2>

        <div className="mb-4">
          <label htmlFor="pw" className="block text-gray-700 text-sm font-bold mb-2">
            {initialTitle}
          </label>
          <input
            type="password"
            id="pw"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            닫기
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;