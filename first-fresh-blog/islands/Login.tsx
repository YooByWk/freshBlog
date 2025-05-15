import { useState } from "preact/hooks";
import { CommonAPI } from "../routes/api/common.ts";
import { setAuthToken } from "../routes/api/auth.ts";





function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError(null); // 이전 오류 메시지 초기화
    setIsLoading(true);
    if (!username || !password) {
      setError("ID와 비밀번호를 입력해주세요.");
      return;
    }
    try {
      const loginRes = await (CommonAPI.login(username, password));
      if (loginRes.token) {
        setAuthToken(loginRes.token);
      }
      globalThis.alert('로그인 성공');
      globalThis.location.href = '/blog';
    } catch (error) {

    }
    finally {
      setIsLoading(false); // 로딩 상태 비활성화

    }
  };

  return (
    // ✅ form 요소: onSubmit 핸들러를 handleSubmit 함수로 연결
    <form onSubmit={handleSubmit} style="display: flex; flex-direction: column; gap: 10px; max-width: 300px; margin: 40px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
      <h2>관리자 로그인</h2> {/* 폼 제목 */}

      {/* 오류 메시지 표시 영역: error state가 null이 아니면 메시지 표시 */}
      {error && <p style="color: red; font-size: 0.9em; margin-bottom: 10px;">{error}</p>}

      <div> {/* 사용자 이름(ID) 입력 필드 그룹 */}
        <label for="username" style="display: block; margin-bottom: 5px; font-weight: bold; ">ID:</label>
        <input
          class="dark:text-zinc-700"
          id="username" // label의 for 속성과 연결
          type="text" // 텍스트 입력 타입
          onInput={(e) => setUsername((e.target as HTMLInputElement).value)} // 입력 시 state 업데이트
          disabled={isLoading} // 로딩 중일 때 입력 필드 비활성화
          style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;" // 스타일
          required // HTML5 필수 입력 필드
        />
      </div>
      <div> {/* 비밀번호 입력 필드 그룹 */}
        <label for="password" style="display: block; margin-bottom: 5px; font-weight: bold;">비밀번호:</label>
        <input
          id="password" // label의 for 속성과 연결
          type="password" // 비밀번호 입력 타입
          class="dark:text-zinc-700"
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)} // 입력 시 state 업데이트
          disabled={isLoading} // 로딩 중일 때 입력 필드 비활성화
          style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;" // 스타일
          required // HTML5 필수 입력 필드
        />
      </div>

      {/* 폼 제출 버튼 */}
      <button
        type="submit" // 제출 버튼 타입
        disabled={isLoading} // 로딩 중일 때 버튼 비활성화
        style="padding: 10px 15px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 1em;" // 스타일
      >
        {isLoading ? '로그인 중...' : '로그인'} {/* 로딩 상태에 따라 버튼 텍스트 변경 */}
      </button>
    </form>
  );
}

export default Login;