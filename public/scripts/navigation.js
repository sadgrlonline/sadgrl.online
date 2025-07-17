document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const container = document.querySelector(".container");

  menuToggle.addEventListener("click", function () {
    container.classList.toggle("sidebar-open");
  });
});
