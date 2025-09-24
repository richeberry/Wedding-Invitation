// 계좌 토글

function toggleAccount(element) {
  const accountInfo = element.nextElementSibling;
  const isActive = accountInfo.classList.contains('active');
  
  document.querySelectorAll('.account-info').forEach(info => {
    info.classList.remove('active');
  });
  document.querySelectorAll('.page6-name').forEach(name => {
    name.classList.remove('active');
  });
  
  if (!isActive) {
    accountInfo.classList.add('active');
    element.classList.add('active');
  }
}

function copyAccount(event, accountNumber) {
  event.stopPropagation();
  
  navigator.clipboard.writeText(accountNumber).then(() => {
    showNotification();
  }).catch(() => {
    const textArea = document.createElement('textarea');
    textArea.value = accountNumber;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showNotification();
  });
}

function showNotification() {
  const notification = document.getElementById('copyNotification');
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}