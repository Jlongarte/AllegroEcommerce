/*MENU HAMBURGUESA*/

const toggleBtn = document.querySelector(".menu-toggle");
const leftMenu = document.querySelector(".left-menu");

toggleBtn.addEventListener("click", () => {
  leftMenu.classList.toggle("active");

  if (leftMenu.classList.contains("active")) {
    toggleBtn.innerHTML = "&#10005;"; // ✕
    toggleBtn.classList.add("close-right"); // Mover a la derecha
  } else {
    toggleBtn.innerHTML = "&#9776;"; // ☰
    toggleBtn.classList.remove("close-right"); // Volver a la izquierda
  }
});

/*BACKGROUND TRANSITION*/

const heroSection = document.querySelector(".hero-section");
const links = document.querySelectorAll(".hero-section nav a");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    const category = link.dataset.category;
    heroSection.className = "hero-section " + category; // cambia clase para fondo
  });
  link.addEventListener("mouseout", () => {
    heroSection.className = "hero-section default"; // vuelve a fondo por defecto
  });
});

