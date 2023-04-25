// Menu button when width less than 750px
const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(`Please check your class names, there is no ${selector} class`)
}
const links = getElement('.nav-links')
const dropDownBtn = getElement('.nav-btn')
dropDownBtn.addEventListener('click', () => {links.classList.toggle('show-links')})

// Day/Night mode
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png";
    }else{
        icon.src = "img/moon.png";
    }
}

// Random drinks page selector - Smoothie
function randomLinkSmoothie() {
  // Define an array of URLs (to choose from)
  var links = [
    "smoothie-recipe-1.html",
    "smoothie-recipe-2.html"
  ];

  // Generate random index from 0 to array size
  var randomIndex = Math.floor(Math.random() * links.length);

  // Use random index to select link from the array
  var randomLink = links[randomIndex];

  // Navigate user to the selected random link
  window.location.href = randomLink;
}

// Random drinks page selector - Milkshakes
function randomLinkMilkshakes() {
  // Define an array of URLs (to choose from)
  var links = [
    "milkshake-recipe-1.html",
    "milkshake-recipe-2.html"
  ];
  
  // Generate random index from 0 to array size
  var randomIndex = Math.floor(Math.random() * links.length);
  
  // Use random index to select link from array
  var randomLink = links[randomIndex];
  
  // Navigate user to the selected random link
  window.location.href = randomLink;
}

// Random drinks page selector - HotDrinks 
function randomLinkHotDrinks() {
  // Define array of URLs (to choose from)
  var links = [
    "hot-drinks-recipe-1.html",
    "hot-drinks-recipe-2.html"
  ];
  
  // Generate random index from 0 to array size
  var randomIndex = Math.floor(Math.random() * links.length);
  
  // Use random index to select link from array
  var randomLink = links[randomIndex];
  
  // Navigate user to the selected random link
  window.location.href = randomLink;
}

// Random drinks page selector - ColdDrinks
function randomLinkColdDrinks() {
  // Define array of URLs (to choose from)
  var links = [
    "cold-drinks-recipe-1.html",
    "cold-drinks-recipe-2.html"
  ];
  
  // Generate random index from 0 to array size
  var randomIndex = Math.floor(Math.random() * links.length);
  
  // Use random index to select link from array
  var randomLink = links[randomIndex];
  
  // Navigate user to the selected random link
  window.location.href = randomLink;
}
 
// Carosel (in privacy policy)
let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("carousel-item");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
