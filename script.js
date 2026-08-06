// Pequeña lluvia de confeti al tocar la tarjeta 🎉
(function () {
  const emojis = ["🎉", "🎊", "💜", "💇‍♀️", "🌈", "🥳"];
  const card = document.querySelector(".card");
  if (!card) return;

  function burst(x, y) {
    for (let i = 0; i < 12; i++) {
      const piece = document.createElement("span");
      piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      piece.style.position = "fixed";
      piece.style.left = x + "px";
      piece.style.top = y + "px";
      piece.style.fontSize = 14 + Math.random() * 16 + "px";
      piece.style.pointerEvents = "none";
      piece.style.zIndex = "9999";
      piece.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      document.body.appendChild(piece);

      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 120;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist + 80;

      requestAnimationFrame(() => {
        piece.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.random() * 360}deg)`;
        piece.style.opacity = "0";
      });

      setTimeout(() => piece.remove(), 1100);
    }
  }

  card.addEventListener("click", function (e) {
    burst(e.clientX, e.clientY);
  });

  // Confeti de bienvenida
  window.addEventListener("load", function () {
    burst(window.innerWidth / 2, window.innerHeight / 3);
  });
})();
