<script>
  import { onMount } from "svelte";

  let comments = [];
  let newComment = "";

  // 댓글 목록 불러오기
  async function fetchComments() {
    const res = await fetch("/guestbook");
    comments = await res.json();
  }

  // 댓글 추가하기
  async function addComment() {
    if (!newComment.trim()) return; // 빈 댓글 방지

    await fetch("/guestbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newComment })
    });

    newComment = "";
    await fetchComments(); // 댓글 목록 업데이트
  }

  onMount(fetchComments); // 페이지 로드 시 댓글 불러오기
</script>

<h1>📖 방명록</h1>

<!-- 입력 필드와 버튼을 같은 줄에 배치 -->
<div class="input-container">
  <input bind:value={newComment} placeholder="방명록을 자유롭게 작성하세요" />
  <button on:click={addComment}>등록</button>
</div>

<!-- 댓글 목록 -->
<ul>
  {#each comments as comment}
    <li>{comment.text}</li>
  {/each}
</ul>

<style>
  .input-container {
    display: flex; /* 가로 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    gap: 10px; /* 입력창과 버튼 사이 간격 */
    width: 100%;
  }

  input {
    flex: 1; /* 남은 공간을 모두 차지 */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background: #0073e6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  ul {
    margin-top: 20px;
    list-style: none;
    padding: 0;
  }

  li {
    background: #f9f9f9;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
  }
</style>
