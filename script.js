// 계좌번호 토글

function toggleAccount(element) {
  const info = element.nextElementSibling;
  const allInfo = document.querySelectorAll('.account-info');

  // 다른 박스 닫기
  allInfo.forEach(el => {
    if (el !== info) el.style.display = "none";
  });

  // 클릭한 계좌 토글
  info.style.display = (info.style.display === "block") ? "none" : "block";
}

function copyAccount(event, text) {
  event.stopPropagation(); // 부모 클릭 이벤트 방지
  navigator.clipboard.writeText(text).then(() => {
    alert("계좌번호가 복사되었습니다.");
  });
}
