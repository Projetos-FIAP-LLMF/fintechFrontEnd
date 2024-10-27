
// Abre aba de notificação
function notificacoes() {
  const painel = document.getElementById('notificacaoPainel');
  painel.style.display = painel.style.display === 'block' ? 'none' : 'block';
}

// Abre pop Up de cadastro cartão
document.getElementById('add-cartao-botao').addEventListener('click', toggleModal);

function toggleModal() {
  const modal = document.getElementById('cartaoModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function addCard() {
  alert('Cartão cadastrado com sucesso!');
  toggleModal();
}

// Atualiza a pré-visualização do cartão
function updateCartaoPreview() {
  const cardNumberInput = document.getElementById('numero');
  const cardNameInput = document.getElementById('nome');
  const cardExpirationInput = document.getElementById('exp');

  // Formata o número do cartão
  const formattedNumber = cardNumberInput.value.replace(/(\d{4})(?=\d)/g, '$1 ');
  document.getElementById('numCartao').innerText = formattedNumber || '0000 0000 0000 0000';

  // Atualiza o nome do titular
  document.getElementById('nomeCartao').innerText = cardNameInput.value || 'NOME DO TITULAR';

  // Formata a data de expiração
  const formattedExpiry = cardExpirationInput.value.replace(/(\d{2})(?=\d)/g, '$1/');
  document.getElementById('expCartao').innerText = formattedExpiry || 'MM/AA';
}

