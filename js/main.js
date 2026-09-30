// Conteúdo dinâmico do rodapé
document.getElementById("year").innerText = new Date().getFullYear();

// Navegação mobile
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("nav");
menuBtn.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("nav--open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav--open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menu");
  });
});
