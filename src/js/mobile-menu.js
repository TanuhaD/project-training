const mobMenu = document.querySelector('#mobile-menu');
export const initMobileMenu = () => {
  const mobMenuOpenBtn = document.querySelector('#mobile-menu-open-btn');
  const mobMenuClosebtn = document.querySelector('#mobile-menu-close-btn');
  const mobileMenuOverlay = document.querySelector('.mobile-menu__overlay');
  mobMenuOpenBtn.addEventListener('click', showMobileMenu);
  mobMenuClosebtn.addEventListener('click', hideMobileMenu);
  mobileMenuOverlay.addEventListener('click', hideMobileMenu);
};
const showMobileMenu = () => {
  mobMenu.style = 'display: block;';
};

const hideMobileMenu = () => {
  mobMenu.style = 'display: none;';
};
