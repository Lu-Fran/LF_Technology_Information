let btnMenuMobile = document.getElementById("btnOpenMenu"); //btnOpenMenu corresponde ao id no código HTML
let mobileSideMenu = document.getElementById("mobileMenu"); //mobileMenu corresponde ao id no código HTML
let aplyMenuFilter = document.getElementById("filterOverPage"); //filterOverPage corresponde ao id no código HTML
let btnClose = document.querySelector(".btnClose"); // Capturando o botão de fechar

// Abrir menu ao clicar no botão de menu
btnMenuMobile.addEventListener("click", () => {
  mobileSideMenu.classList.add("openMobileMenu");
  aplyMenuFilter.style.display = "block"; // Exibir o overlay
});

// Fechar menu ao clicar no botão de fechar
btnClose.addEventListener("click", () => {
  mobileSideMenu.classList.remove("openMobileMenu");
  aplyMenuFilter.style.display = "none"; // Esconder o overlay
});

// Fechar menu ao clicar fora dele (Overlay)
aplyMenuFilter.addEventListener("click", () => {
  mobileSideMenu.classList.remove("openMobileMenu");
  aplyMenuFilter.style.display = "none"; // Esconder o overlay
});

// Fechar menu ao clicar em um link do menu
document.querySelectorAll(".mobileMenu nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileSideMenu.classList.remove("openMobileMenu");
    aplyMenuFilter.style.display = "none"; // Esconder o overlay
  });
});
