document.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.slider-track');

  tracks.forEach((track) => {
    const items = track.children;

    // 1回だけ複製（重複防止）
    if (track.dataset.duplicated) return;

    const fragment = document.createDocumentFragment();

    Array.from(items).forEach((item) => {
      fragment.appendChild(item.cloneNode(true));
    });

    track.appendChild(fragment);

    track.dataset.duplicated = 'true';
  });
});
