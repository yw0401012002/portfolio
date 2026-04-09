document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typing-text');

  // 改行を明示的に指定
  const text = `デザインからコーディング、運用まで
20年以上の経験で、丁寧にかたちにする
Webデザイン × フロントエンドエンジニア`;

  let index = 0;
  el.textContent = '';
  el.classList.add('typing');

  function type() {
    if (index < text.length) {
      el.textContent += text[index];
      index++;
      setTimeout(type, 50);
    } else {
      el.classList.remove('typing');
    }
  }

  type();
});
