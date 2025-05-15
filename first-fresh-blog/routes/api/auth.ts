// first-fresh-blog/utils/auth.ts

import { IS_BROWSER } from "$fresh/runtime.ts";
import { createFetch } from "./image.ts";

// localStorage에 토큰을 저장할 때 사용할 키 이름 (상수로 정의)
const AUTH_TOKEN_STORAGE_KEY = 'authToken';

let apiBaseUrl: string; // API 기본 URL을 저장할 변수 선언
if (IS_BROWSER) {
  // 코드가 브라우저 환경에서 실행 중인 경우
  if (location.origin === "http://localhost:43000") {
    apiBaseUrl = 'http://localhost:3000/api/';
  } else {
    apiBaseUrl = Deno.env.get("DOMAIN") || "https://bangerdirect.site/api/";
  }
} else { // 서버에서 실행중인 경우 
  apiBaseUrl = Deno.env.get("URL") || 'http://localhost:3000/api/';
}

const API_BASE_URL = apiBaseUrl;


const api = createFetch(API_BASE_URL);

/**
 * localStorage에서 인증 토큰을 가져오는 함수
 * @returns 저장된 토큰 문자열 또는 토큰이 없는 경우 null
 */
export function getAuthToken(): string | null {
  // 브라우저 환경에서만 localStorage에 접근 가능
  if (IS_BROWSER) {
    return localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  }
  // 서버 환경에서는 localStorage가 없으므로 항상 null 반환
  return null;
}

/**
 * localStorage에 인증 토큰을 저장하는 함수
 * @param token 저장할 토큰 문자열
 */
export function setAuthToken(token: string): void {
  if (IS_BROWSER) {
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
  }
}

// /**
//  * localStorage에서 인증 토큰을 삭제하는 함수 (로그아웃 시 사용)
//  */
// export function removeAuthToken(): void {
//     if (IS_BROWSER) {
//         localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
//     }
// }

/**
 * 현재 사용자가 인증되었는지 (localStorage에 토큰이 있는지) 확인하는 함수
 * @returns 토큰이 있으면 true, 없으면 false
 */
export function isAuthenticatedClientSide(): boolean {
  // getAuthToken() 함수를 사용하여 토큰이 null이 아닌지 확인
  return !!getAuthToken();
}

export async function verifyToken(): Promise<boolean> {
  try {
    await api('auth');
    return true;

  } catch (error) {
    throw new Error("토큰 검증 중 문제 발생");
  }
}