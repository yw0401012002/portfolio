// アンカーリンクでドロワーを閉じる
document.addEventListener('DOMContentLoaded', () => {
  const drawerToggle = document.getElementById('drawer-toggle');
  const links = document.querySelectorAll('.sub-menu a');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      drawerToggle.checked = false;
    });
  });
});
