const slideDelay = 5000;
const slideNumber = 3;
let currentSlide = 1;

const heroBackground = document.querySelectorAll('.hero__background');
export const initHeroSlider = () => {
  setInterval(() => {
    const nextSlide = currentSlide === slideNumber ? 1 : currentSlide + 1;
    heroBackground.forEach((bgItem) => {
      if (bgItem.dataset.num === currentSlide.toString()) {
        bgItem.style = 'opacity: 0';
      }
      if (bgItem.dataset.num === nextSlide.toString()) {
        bgItem.style = 'opacity: 1';
      }
    });
    currentSlide = nextSlide;
  }, slideDelay);
};
