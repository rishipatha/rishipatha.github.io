document.addEventListener("DOMContentLoaded", function() {
    fetch("nav.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("nav-placeholder").innerHTML = data;
  
        // Attach event listeners for burger menu functionality
        const burger = document.getElementById('burger-menu');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        const burgerContainer = document.getElementById('burger-container');
  
        function toggleSidebar(e) {
          e.preventDefault();
          sidebar.classList.toggle('active');
          overlay.classList.toggle('active');
        }
  
        burger.addEventListener('click', toggleSidebar);
        burger.addEventListener('touchstart', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);
  
        // Fade the burger menu on scroll
        window.addEventListener('scroll', function() {
          if(window.scrollY > 50) {
            burgerContainer.style.opacity = '0.7';
          } else {
            burgerContainer.style.opacity = '1';
          }
        });
      })
      .catch(error => console.error('Error loading nav:', error));
  });
  