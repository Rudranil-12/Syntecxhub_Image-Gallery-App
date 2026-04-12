const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    card.style.transform =
      `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.05)`;

    const shine = card.querySelector('.shine');
    if (shine) {
      const px = ((e.clientX - r.left) / r.width * 100).toFixed(0);
      const py = ((e.clientY - r.top) / r.height * 100).toFixed(0);

      shine.style.background =
        `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.25), transparent 60%)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform =
      'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)';
  });

  /* Optional click */
  card.addEventListener('click', () => {
    const d = card.dataset;
    if (typeof openM === "function") {
      openM(d.src, d.name);
    }
  });
});