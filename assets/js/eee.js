function slidesPlugIn(activeSlide = 0) {
    let slides = document.querySelectorAll(".slide");
    slides[activeSlide].classList.add('active')
  
    for (let slide of slides) {
      slide.addEventListener("click", () => {
        clearActiveClasses();
        slide.classList.add("active");
      });
    }
    function clearActiveClasses() {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
  }
  
  slidesPlugIn()