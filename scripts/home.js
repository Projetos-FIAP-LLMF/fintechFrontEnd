// Abre aba de notificação
function notificacoes() {
    const painel = document.getElementById("notificacaoPainel");
    painel.style.display = painel.style.display === "block" ? "none" : "block";
}

function toggleValue(valueId, iconId) {
  const valueElement = document.getElementById(valueId);
  const iconElement = document.getElementById(iconId);

  if (valueElement.dataset.visible === "true") {
    // Esconder o valor (transforma em asteriscos) e muda o ícone para olho fechado
    valueElement.textContent = "****";
    iconElement.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    valueElement.dataset.visible = "false";
  } else {
    // Mostrar o valor real e muda o ícone para olho aberto
    valueElement.textContent = valueElement.dataset.value; // Usa o valor armazenado
    iconElement.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    valueElement.dataset.visible = "true";
  }
}

