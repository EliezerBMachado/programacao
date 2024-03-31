document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('meuForm');
  var inputDado = document.getElementById('dado');
  var listaDados = document.getElementById('listaDados');

  // Verifica se há dados salvos localmente e os exibe na lista
  var dadosSalvos = localStorage.getItem('dados');
  if (dadosSalvos) {
    var dadosArray = JSON.parse(dadosSalvos);
    dadosArray.forEach(function(dado, index) {
      adicionarItemLista(dado, index);
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Captura o dado digitado pelo usuário
    var novoDado = inputDado.value;

    // Adiciona o novo dado à lista na página
    adicionarItemLista(novoDado);

    // Salva os dados localmente
    var dadosSalvos = localStorage.getItem('dados');
    var dadosArray = [];
    if (dadosSalvos) {
      dadosArray = JSON.parse(dadosSalvos);
    }
    dadosArray.push(novoDado);
    localStorage.setItem('dados', JSON.stringify(dadosArray));

    // Limpa o campo de entrada
    inputDado.value = '';
  });

  function adicionarItemLista(dado, index) {
    var itemLista = document.createElement('li');
    itemLista.textContent = dado;

    // Cria um botão "Limpar" para remover o item da lista
    var btnLimpar = document.createElement('button');
    btnLimpar.textContent = 'Limpar';
    btnLimpar.classList.add('btn-limpar');
    btnLimpar.addEventListener('click', function() {
      removerItemLista(index);
    });

    // Adiciona o botão "Limpar" ao item da lista
    itemLista.appendChild(btnLimpar);
    listaDados.appendChild(itemLista);
  }

  function removerItemLista(index) {
    var dadosSalvos = localStorage.getItem('dados');
    var dadosArray = [];
    if (dadosSalvos) {
      dadosArray = JSON.parse(dadosSalvos);
    }

    // Remove o item da lista e dos dados salvos localmente
    if (index >= 0 && index < dadosArray.length) {
      dadosArray.splice(index, 1);
      localStorage.setItem('dados', JSON.stringify(dadosArray));

      // Remove o item da lista na página
      var listaItems = document.querySelectorAll('#listaDados li');
      if (listaItems.length > index) {
        listaItems[index].remove();
      }
    }
  }
});
