    // Função para mostrar o texto ao passar o mouse sobre a imagem
    document.getElementById("volei").addEventListener("mouseover", function() {
      document.getElementById("textov").style.display = "block";
  });

  // Função para ocultar o texto ao retirar o mouse de cima da imagem
  document.getElementById("volei").addEventListener("mouseout", function() {
      document.getElementById("textov").style.display = "none";
  });

      // Spotify
      document.getElementById("spot").addEventListener("mouseover", function() {
        document.getElementById("textos").style.display = "block";
    });
  
    // Spotify
    document.getElementById("spot").addEventListener("mouseout", function() {
        document.getElementById("textos").style.display = "none"; 
    });

    // Tabuleiro
    document.getElementById("tabul").addEventListener("mouseover", function() {
      document.getElementById("textot").style.display = "block";
  });

  // Tabuleiro
  document.getElementById("tabul").addEventListener("mouseout", function() {
      document.getElementById("textot").style.display = "none"; 
  });