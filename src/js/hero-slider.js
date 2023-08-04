const slideDelay = 5000;
const slideNumber = 3;
let currentSlide = 1;
let intervalId;

const heroBackground = document.querySelectorAll('.hero__background');
const indicators = document.querySelectorAll('.sliderIndicator-strip');
const rightBtn = document.querySelector('#slider-nav-btn_right');
const leftBtn = document.querySelector('#slider-nav-btn_left');
export const initHeroSlider = () => {
  const showCurrentSlide = () => {
    heroBackground.forEach((bgItem) => {
      if (bgItem.dataset.num === currentSlide.toString()) {
        bgItem.style = 'opacity: 1';
      } else {
        bgItem.style = 'opacity: 0';
      }
    });
    indicators.forEach((indicator) => {
      if (indicator.dataset.num === currentSlide.toString()) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  };
  rightBtn.addEventListener('click', () => {
    currentSlide = currentSlide === slideNumber ? 1 : currentSlide + 1;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    showCurrentSlide();
  });

  leftBtn.addEventListener('click', () => {
    currentSlide = currentSlide === 1 ? slideNumber : currentSlide - 1;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    showCurrentSlide();
  });

  intervalId = setInterval(() => {
    currentSlide = currentSlide === slideNumber ? 1 : currentSlide + 1;
    showCurrentSlide();
  }, slideDelay);
};
