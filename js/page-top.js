const pagetop = document.querySelector('.pagetop');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  // 表示制御
  if (window.scrollY > 200) {
    pagetop.classList.add('is-show');
  } else {
    pagetop.classList.remove('is-show');
  }

  // 画面幅で距離を変更
  const offset = window.innerWidth <= 767 ? 10 : 25;

  // フッター位置取得
  const footerTop = footer.getBoundingClientRect().top + window.scrollY;
  const pagetopHeight = pagetop.offsetHeight;

  // 停止位置
  const stopPosition = footerTop - pagetopHeight - offset;

  if (window.scrollY + window.innerHeight > stopPosition + pagetopHeight) {
    // フッターに近づいたら止める
    pagetop.style.position = 'absolute';
    pagetop.style.bottom = 'auto';
    pagetop.style.top = stopPosition + 'px';
  } else {
    // 通常は固定
    pagetop.style.position = 'fixed';
    pagetop.style.top = 'auto';
    pagetop.style.bottom = offset + 'px';
  }
});
