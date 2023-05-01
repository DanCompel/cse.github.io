var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByTagName("img");
  var captions = document.querySelector(".caption");
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.add("active");
  captions.innerHTML = slides[slideIndex-1].alt;
  setTimeout(showSlides, 3000); // Change image every 5 seconds
}

window.addEventListener("load", function() {
  var container = document.querySelector(".slideshow-container");
  container.style.opacity = "0";
  setTimeout(function() {
    container.style.transition = "opacity 0.5s ease-in-out";
    container.style.opacity = "1";
  }, 000);
});
