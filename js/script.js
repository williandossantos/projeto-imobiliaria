
let button = document.querySelector(".btn-menu")
let navbar = document.querySelector(".menu-mobile")
button.addEventListener('click', ()=>{
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
      } else {
        navbar.style.display = "block";
      }
})