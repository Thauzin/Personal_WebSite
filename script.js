    // Função para mostrar o texto ao passar o mouse sobre a imagem
    document.getElementById("volei").addEventListener("mouseover", function() {
      document.getElementById("textov").style.display = "block";
  });

  // Função para ocultar o texto ao retirar o mouse de cima da imagem
  document.getElementById("volei").addEventListener("mouseout", function() {
      document.getElementById("textov").style.display = "none";
  });