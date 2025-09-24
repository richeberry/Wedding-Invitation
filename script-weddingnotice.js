const page1 = document.querySelector('.page1');
const notice = page1.querySelector('.wedding-notice');
const page1Inner = page1.querySelector('.page1-inner');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      page1Inner.classList.add('show');
      notice.classList.add('show');  // 글자 전체 한 번에 나타남
      observer.unobserve(page1);
    }
  });
}, {
  threshold: 0.5
});

observer.observe(page1);
