document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var dado = urlParams.get('dado');
    var listaNumerada = document.getElementById('listaNumerada');
    
    if (dado) {
      var itemLista = document.createElement('li');
      itemLista.textContent = dado;
      listaNumerada.appendChild(itemLista);
    }
  });
  