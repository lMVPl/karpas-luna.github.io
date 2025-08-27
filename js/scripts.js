// ===========================
// Animaciones con Scroll
// ===========================
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
});

// ===========================
// Lightbox
// ===========================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Cerrar al dar clic fuera de la imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
// ===========================
// Fin del script
// ===========================