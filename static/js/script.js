// script.js

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const iconContainer = document.querySelector('.icon-container'); // second.html에서 가져옴
    const secondSection = document.getElementById('second-section'); // second.html에서 가져옴
  
    window.addEventListener("scroll", () => {
      // 모든 섹션에 대한 visible 클래스 처리 (기존 코드)
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
  
      // second-section 아이콘 애니메이션 (second.html에서 가져온 코드)
      if (secondSection) { // secondSection이 null이 아닌 경우에만 실행 (다른 페이지에서는 실행 안 함)
          const triggerBottom = secondSection.getBoundingClientRect().top + window.scrollY;
          const windowBottom = window.scrollY + window.innerHeight;
  
          if (windowBottom > triggerBottom) {
            iconContainer.classList.add('show');
          } else {
            iconContainer.classList.remove('show');
          }
        }
    });
  
      // 페이지 로드 시 초기 상태 확인 (second.html에서 가져옴)
      if (secondSection) {
           const triggerBottom = secondSection.getBoundingClientRect().top + window.scrollY;
          const windowBottom = window.scrollY + window.innerHeight;
  
          if (windowBottom > triggerBottom) {
            iconContainer.classList.add('show');
          } else {
            iconContainer.classList.remove('show');
          }
      }
  
  });
  
  
  // 이메일 복사 기능 (기존 코드, script.js에 그대로 유지)
  document.getElementById('copy-email').addEventListener('click', function(event) {
      event.preventDefault();
      const email = this.dataset.email;
      const iconSpan = this.querySelector('.email-icon'); // span 요소 선택
  
  
      navigator.clipboard.writeText(email).then(() => {
        alert('Email address copied: ' + email);
         iconSpan.textContent = '✅'; // 복사 성공 시 아이콘 변경
  
         // (선택 사항) 일정 시간 후 원래 아이콘으로 되돌리기
         setTimeout(() => {
           iconSpan.textContent = '✉';
         }, 2000); // 2초 후
  
      }).catch(err => {
        console.error('Could not copy email: ', err);
        alert('Failed to copy email address.');
      });
    });