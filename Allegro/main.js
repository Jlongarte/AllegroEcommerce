const toggleBtn = document.querySelector(".menu-toggle");
const leftMenu = document.querySelector(".left-menu");

toggleBtn.addEventListener("click", () => {
  leftMenu.classList.toggle("active");
});

toggleBtn.addEventListener("click", () => {
  leftMenu.classList.toggle("active");

  // Cambiar ícono
  if (leftMenu.classList.contains("active")) {
    toggleBtn.innerHTML = "&#10005;"; // ✕
  } else {
    toggleBtn.innerHTML = "&#9776;"; // ☰
  }
});
