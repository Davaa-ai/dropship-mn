
// Shared Logic
export function initGallery() {
  const g = document.getElementById('gallery');
  const ds = document.querySelectorAll('#dots span');
  if(!g || !ds.length) return;
  let galleryTicking = false;
  g.addEventListener('scroll', () => {
    if (!galleryTicking) {
      requestAnimationFrame(() => {
        const i = Math.round(g.scrollLeft / g.clientWidth);
        ds.forEach((d, j) => d.classList.toggle('active', j === i));
        galleryTicking = false;
      });
      galleryTicking = true;
    }
  });
}

export function initTiers() {
  document.querySelectorAll('.tier').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.tier').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      const q = el.dataset.qty;
      const t = document.getElementById('ftier');
      if (t) t.value = q;
    });
  });
}


// Call initializations
document.addEventListener("DOMContentLoaded", () => {
  initGallery();
  initTiers();
});
