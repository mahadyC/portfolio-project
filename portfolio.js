
const showOnPx = 100;
const backToTopButton = document.querySelector("#back-to-top");
const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
});

const goToTop = () => {
  document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", goToTop);


const mobileMenuBarImg = document.getElementById("mobile-menu-bar-img");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuBarImg.addEventListener("click", () => {
  
  if(mobileMenu.style.display === "none"){
    
    mobileMenu.style.display = "block";
  }
  else {
    mobileMenu.style.display = "none";
  }
})