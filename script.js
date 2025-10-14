 // Header transparente -> sólido ao rolar
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Efeitos de aparecer ao rolar
const faders = document.querySelectorAll(".fade-in, .fade-up");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);
 


// Rolagem suave para cada seção ao clicar nos botões do menu
document.querySelectorAll('.nav-menu a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Seta para baixo funcional
const scrollDownBtn = document.querySelector('.scroll-down');
if (scrollDownBtn) {
  scrollDownBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#sobre');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
