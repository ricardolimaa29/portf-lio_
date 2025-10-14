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
 

 // Rolagem suave para as seções
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('scrollDown');
    const contentSection = document.querySelector('.content');
    if (scrollBtn && contentSection) {
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: contentSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
