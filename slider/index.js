// const slides = document.querySelector(".slides1");
// let index = 0;

// function showNextSlide() {
//   index = (index + 1) % 3; // Loop through 3 slides
//   slides.style.transform = `translateX(-${index * 300}px)`;
// }

// setInterval(showNextSlide, 3000); // Change slide every 3 seconds

const slides = document.querySelector(".slides1");
const slideCount = document.querySelectorAll(".slide1").length; // Total slides, including duplicate
const slideWidth = 300; // Width of each slide
let index = 0;

function showNextSlide() {
  index++;
  slides.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
  slides.style.transform = `translateX(-${index * slideWidth}px)`;

  // If we reach the duplicate slide, reset to the first slide
  if (index === slideCount - 1) {
    setTimeout(() => {
      slides.style.transition = "none"; // Disable transition
      slides.style.transform = `translateX(0px)`; // Reset to first slide
      index = 0; // Reset index
    }, 500); // Wait for the transition to complete (0.5s)
  }
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
