import { json } from "@sveltejs/kit";

// 댓글 데이터를 저장할 임시 배열
let comments = [];

export async function GET() {
  return json(comments);
}

export async function POST({ request }) {
  const { text } = await request.json();
  comments.push({ text }); // 새 댓글 추가
  return json({ success: true });
}
