// script.js
document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.team-card img');

  imgs.forEach(img => {
    // pega os caminhos exatamente como escritos no HTML (evita URLs absolutas)
    const originalSrc = img.getAttribute('src');
    // tenta primeiro dataset no próprio <img>, se não existir tenta no .team-card pai
    const hoverSrc = img.dataset.hover || img.closest('.team-card')?.dataset?.hover;

    if (!hoverSrc) return; // se não tiver hover definido, pula

    // pré-carrega a imagem de hover
    const pre = new Image();
    pre.src = hoverSrc;

    // garante transição suave via JS caso CSS não tenha sido definido
    img.style.transition = img.style.transition || 'opacity 0.35s ease, transform 0.35s ease';
    img.style.willChange = 'opacity, transform';

    let locked = false; // se true, mantém a imagem de hover (toggle via clique)
    let showingHover = false;

    const showHover = () => {
      if (showingHover) return;
      showingHover = true;
      img.style.opacity = '0';
      // espera a opacidade sumir, troca a src e reaparece
      setTimeout(() => {
        img.setAttribute('src', hoverSrc);
        img.style.opacity = '1';
      }, 220);
    };

    const hideHover = () => {
      if (!showingHover) return;
      showingHover = false;
      img.style.opacity = '0';
      setTimeout(() => {
        img.setAttribute('src', originalSrc);
        img.style.opacity = '1';
      }, 220);
    };

    // hover (desktop)
    img.addEventListener('mouseenter', () => {
      showHover();
    });

    img.addEventListener('mouseleave', () => {
      // se estiver "locked" por clique, não volta
      if (!locked) hideHover();
    });

    // clique alterna estado (útil em mobile)
    img.addEventListener('click', (e) => {
      e.preventDefault();
      locked = !locked;
      if (locked) showHover();
      else hideHover();
    });

    // toque rápido em mobile - mostra hover (não altera locked)
    img.addEventListener('touchstart', () => {
      showHover();
    }, {passive: true});
  });
});
