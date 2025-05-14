import { useState } from "preact/hooks";
import { KoHeader } from "../../../components/KoHeader.tsx";
import Editor from "../../../islands/Editor.tsx";


// 게시물 생성 페이지
export default function CreatePost() {
  const active = '/blog';

  return (
    <div>
      <KoHeader active={active} />
      <Editor />
    </div>
  );
};
