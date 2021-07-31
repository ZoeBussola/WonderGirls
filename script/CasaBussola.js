document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");


  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "#5e3888 url(" + imgObject[i] + ") no-repeat center 100%";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "img/PagCasaBusssola/Mivestuario/d6c6674a14325c7494e882fd78df2567.jpg" ,
  "img/PagCasaBusssola/Mivestuario/1b56fd80d4bcca916eeee3b578bd0bee.jpg" ,
  "img/PagCasaBusssola/Mivestuario/2ea37eb46e161cb4da4d551f1cebe6cc.jpg" ,
  "img/PagCasaBusssola/Mivestuario/06c39eb61e889bb2aad84d9fb935d512.jpg" ,
  "img/PagCasaBusssola/Mivestuario/6efa21237f154c605306131379df561d.jpg" ,
  "img/PagCasaBusssola/Mivestuario/9cdd41d59b5a8b5b699a191265a62f8b.jpg" ,
  "img/PagCasaBusssola/Mivestuario/9d974f6488494a8db4274c61e902cec7.jpg" ,
  "img/PagCasaBusssola/Mivestuario/68d022732ed361543d76977f47aea718.jpg" ,
  "img/PagCasaBusssola/Mivestuario/3118c0c26eba79acf292c9e9fc2b5584.jpg" ,
  "img/PagCasaBusssola/Mivestuario/9757f1480fd0378cf6599e5180c9d728.jpg" ,
  "img/PagCasaBusssola/Mivestuario/038510f58af81c6d85087663b1394fa9.jpg" ,
  "img/PagCasaBusssola/Mivestuario/76307f047f5a6cb1ae14520647c878c2.jpg" ,
  "img/PagCasaBusssola/Mivestuario/7050432c71f7876a6502abe69dc1d688.jpg" ,
  "img/PagCasaBusssola/Mivestuario/34530334dbf716ae197fbfcbdcb18d33.jpg" ,
  "img/PagCasaBusssola/Mivestuario/a20014d33a8d8443cca6de1f28a161bc.jpg" ,
 
];
let imgObject2 = [
  "img/PagCasaBusssola/Mivestuario/V2.png",
  "img/PagCasaBusssola/Mivestuario/V1.png",
  "img/PagCasaBusssola/Mivestuario/V3.png",
];


let mainImg = 0;
let prevImg = imgObject2.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  // mainView.style.background = "#5e3888 url(" + imgObject2[mainImg] + ") no-repeat center 100%";
  mainView.setAttribute("src",`${imgObject2[mainImg]}`)

  

  let leftView = document.getElementById("leftView");
  leftView.style.background = "#5e3888 url(" + imgObject2[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "#5e3888 url(" + imgObject2[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject2[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject2.length -1)) {
    nextImg = 0;
    mainView.classList.toggle("ajustar")
  } else {
    nextImg++;
    mainView.classList.toggle("ajustar")
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject2.length - 1;
    mainView.classList.toggle("ajustar")
  } else {
    prevImg--;
    mainView.classList.toggle("ajustar")
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();










"use strict";
let navLinks = document.querySelectorAll(".carousel .nav-link");
let slides = document.querySelectorAll(".carousel .slides img");
let overlays = document.querySelectorAll(".carousel .bar");
let maxZIndex = navLinks.length;
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
slides[0].classList.add("active");
navLinks[0].classList.add("active");
navLinks.forEach((navLink, activeIndex) => {
    overlays[activeIndex].style.zIndex = `${navLinks.length - activeIndex}`;
    navLink.addEventListener("click", () => {
        // nav-link
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        navLink.classList.add("active");
        // slide
        let currentSlide = document.querySelector(".carousel .slides img.active");
        let slideFadeOut = currentSlide.animate([
            { transform: "translateX(0)", opacity: 1 },
            { transform: "translateX(5%)", opacity: 0 }
        ], {
            duration: 600,
            easing: "ease-in",
            fill: "forwards"
        });
        slideFadeOut.onfinish = () => {
            slides.forEach((slide) => slide.classList.remove("active"));
            let activeSlide = slides[activeIndex];
            activeSlide.classList.add("active");
            activeSlide.animate([
                {
                    transform: "translateX(-5%)",
                    opacity: 0
                },
                {
                    transform: "translateX(0)",
                    opacity: 1
                }
            ], { duration: 600, easing: "ease-out", fill: "forwards" });
        };
        // overlay
        maxZIndex += 1;
        let activeOverlay = overlays[activeIndex];
        activeOverlay.style.zIndex = `${maxZIndex}`;
        activeOverlay.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: 1200, fill: "forwards", easing: easeInOutQuart });
    });
});

