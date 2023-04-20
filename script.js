const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let index = 0;

function displaySlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  displaySlide(index);
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  displaySlide(index);
}

displaySlide(index);
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
setInterval(nextSlide, 5000);