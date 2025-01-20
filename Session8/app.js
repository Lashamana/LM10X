const slider = document.querySelector(".section-container");
    const slides = document.querySelectorAll(".slide");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const numberOfSlides = slides.length
  
    let currentIndex = 0;

    
    next.onclick = () => {
      currentIndex++
      if(currentIndex > (numberOfSlides - 1)){
        currentIndex = 0
      }
      slides[currentIndex].classList.add('slide')
      console.log("+");
      
    }
  
    prev.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();        
      }
    });