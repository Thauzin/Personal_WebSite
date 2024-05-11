document.addEventListener("DOMContentLoaded", function() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    
    var currentPage = 1;
    
    document.addEventListener("mousemove", function(event) {
      if (event.clientX > window.innerWidth / 2) {
        if (currentPage !== 2) {
          currentPage = 2;
          page1.style.display = "none";
          page2.style.display = "block";
        }
      } else {
        if (currentPage !== 1) {
          currentPage = 1;
          page1.style.display = "block";
          page2.style.display = "none";
        }
      }
    });
  });
  