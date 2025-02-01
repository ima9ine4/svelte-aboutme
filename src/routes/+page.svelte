<script>
  let githubUsername = "ima9ine4";
  let profileImage = `https://github.com/${githubUsername}.png`;
  let bio = "BENTO의 Front-End 개발자 임혜진입니다.";
  let projects = [
    { title: "감귤지도 - 귤을 따라 펼쳐지는 새로운 제주도 여정", link: "https://github.com/JEJU-AWS-HACKATHON-PYJ" },
    { title: "CLIVING - 클라이밍 영상 클립 자동 생성 어플", link: "https://github.com/KOBOT-13/cliving-front" },
    { title: "LINRING - 너와 나를 잇는 울림", link: "https://github.com/TEAM-LINRING" }
  ];
</script>

<!-- 메인 섹션 -->
<section class="hero">
  <img src={profileImage} alt="GitHub Profile" class="profile-image">
  <div class="intro-text">
    <h1>{githubUsername}</h1>
    <p>{bio}</p>
  </div>
</section>

<!-- 프로젝트 섹션 -->
<section class="projects">
  <h2>📌 대표 프로젝트</h2>
  <ul>
    {#each projects as project}
      <li><a href={project.link} target="_blank">{project.title}</a></li>
    {/each}
  </ul>
</section>

<!-- 블로그 & GitHub -->
<section class="links">
  <a href="https://ima9ine.tistory.com" target="_blank">📖 블로그</a>
  <a href="https://github.com/{githubUsername}" target="_blank">💻 GitHub</a>
</section>

<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
  }

  .profile-image {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .projects {
    margin-top: 40px;
  }

  .projects ul {
    list-style: none;
    padding: 0;
  }

  .projects li {
    margin: 10px 0;
  }

  .links {
    margin-top: 40px;
  }

  .links a {
    margin: 0 10px;
    text-decoration: none;
    font-size: 18px;
  }
</style>
