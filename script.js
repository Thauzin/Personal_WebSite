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

      //Brasil
      document.getElementById("br").addEventListener("mouseover", function() {
        document.getElementById("textob").style.display = "block";
    });
  
    // Brasil
    document.getElementById("br").addEventListener("mouseout", function() {
        document.getElementById("textob").style.display = "none"; 
    });

    const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let imageIndex = 0;

function showImage(index) {
  const images = carouselContainer.querySelectorAll('img');
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  imageIndex++;
  if (imageIndex >= carouselContainer.children.length) {
    imageIndex = 0;
  }
  showImage(imageIndex);
}

function prevImage() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = carouselContainer.children.length - 1;
  }
  showImage(imageIndex);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

showImage(imageIndex); // Mostrar a primeira imagem inicialmente
