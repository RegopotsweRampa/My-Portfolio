document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menuBtn");
    var navbarLinks = document.getElementById("navbarLinks");
  
    menuBtn.addEventListener("click", function() {
      menuBtn.classList.toggle("active");
      navbarLinks.classList.toggle("active");
    });
  });