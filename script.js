//계좌 토글
function toggleAccount(element) {
  const info = element.nextElementSibling;
  const allInfos = document.querySelectorAll('.account-info');

  allInfos.forEach(i => {
    if (i !== info) i.classList.remove('active');  // 다른 계좌는 닫기
  });

  info.classList.toggle('active');  // 현재 클릭한 계좌만 열고 닫기
}

function copyAccount(event, text) {
  event.stopPropagation();
  navigator.clipboard.writeText(text).then(() => {
    alert('계좌번호가 복사되었습니다!');
  });
}
