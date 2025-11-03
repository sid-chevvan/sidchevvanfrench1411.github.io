// Presentation Navigation
let currentSlide = 1;
const totalSlides = 12;

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const homeBtn = document.getElementById('homeBtn');

// Show specific slide
function showSlide(slideNumber) {
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Show the target slide
  const targetSlide = document.querySelector(`[data-slide="${slideNumber}"]`);
  if (targetSlide) {
    targetSlide.classList.add('active');
    currentSlide = slideNumber;
  }
  
  // Update button states
  updateButtonStates();
  
  // Scroll to top of slide
  window.scrollTo(0, 0);
}

// Update button disabled states
function updateButtonStates() {
  prevBtn.disabled = currentSlide === 1;
  nextBtn.disabled = currentSlide === totalSlides;
}

// Navigation event listeners
prevBtn.addEventListener('click', () => {
  if (currentSlide > 1) {
    showSlide(currentSlide - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < totalSlides) {
    showSlide(currentSlide + 1);
  }
});

homeBtn.addEventListener('click', () => {
  showSlide(1);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    if (currentSlide > 1) {
      showSlide(currentSlide - 1);
    }
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    if (currentSlide < totalSlides) {
      showSlide(currentSlide + 1);
    }
  } else if (e.key === 'Home') {
    showSlide(1);
  } else if (e.key === 'End') {
    showSlide(totalSlides);
  }
});

// Initialize
updateButtonStates();