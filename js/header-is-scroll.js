//header固定制御
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 50) {
    header.classList.add('is-scroll');
  } else {
    header.classList.remove('is-scroll');
  }
});
