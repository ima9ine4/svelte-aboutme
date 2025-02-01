<script>
  import { onMount } from 'svelte';

  let profileImage = '';
  let githubUsername = 'ima9ine4';
  let bio = '안녕하세요!';

  onMount(async () => {
    const res = await fetch(`https://api.github.com/users/${githubUsername}`);
    const data = await res.json();
    profileImage = data.avatar_url;
  });
</script>

<h1>HYEJIN LIM About Page</h1>

{#if profileImage}
  <div class="profile-container">
    <img src={profileImage} alt="GitHub Profile" class="profile-image">
    <div class="profile-text">
      <h2>{githubUsername}</h2>
      <p>{bio}</p>
    </div>
  </div>
{:else}
  <p>⏳ GitHub 프로필 이미지를 불러오는 중...</p>
{/if}

<style>
  .profile-container {
    display: flex; /* 이미지와 텍스트를 가로로 배치 */
    align-items: center; /* 세로 중앙 정렬 */
    gap: 16px; /* 이미지와 텍스트 사이 간격 */
    padding: 16px;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%; /* 원형 이미지 */
    object-fit: cover; /* 이미지 비율 유지 */
  }

  .profile-text {
    font-size: 16px;
  }
</style>
