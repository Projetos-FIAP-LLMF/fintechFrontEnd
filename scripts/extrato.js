let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const footer = document.querySelector(".menu-icones");
  if (window.scrollY > lastScrollY) {
    // Rolar para baixo
    footer.classList.add("hide");
  } else {
    // Rolar para cima
    footer.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});

function ordenar(criterio) {
  switch(criterio) {
      case 'data':
          console.log("Ordenar por Data");
          break;
      case 'valores':
          console.log("Ordenar por Valores");
          break;
      case 'saidas':
          console.log("Ordenar por Saídas");
          break;
      case 'entradas':
          console.log("Ordenar por Entradas");
          break;
  }
}
