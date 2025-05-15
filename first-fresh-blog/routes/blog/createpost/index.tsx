import { useState, useEffect } from "preact/hooks";
import { KoHeader } from "../../../components/KoHeader.tsx";
import Editor from "../../../islands/Editor.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { isAuthenticatedClientSide, verifyToken } from "../../api/auth.ts";
import { AuthEditor } from "../../../islands/AuthEditor.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    // 서버 측에서는 단순히 페이지 렌더링을 지시합니다.
    return ctx.render();
  },
};

// 게시물 생성 페이지
export default function CreatePost() {
  const active = '/blog';

  return (
    <div>
      <KoHeader active={active} />
      {/* <Editor /> */}
      <AuthEditor />
    </div>
  );
};
