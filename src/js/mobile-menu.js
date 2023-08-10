const mobMenu = document.querySelector('#mobile-menu');
export const initMobileMenu = () => {
  const mobMenuOpenBtn = document.querySelector('#mobile-menu-open-btn');
  const mobMenuClosebtn = document.querySelector('#mobile-menu-close-btn');
  const mobileMenuOverlay = document.querySelector('.mobile-menu__overlay');
  mobMenuOpenBtn.addEventListener('click', showMobileMenu);
  mobMenuClosebtn.addEventListener('click', hideMobileMenu);
  mobileMenuOverlay.addEventListener('click', hideMobileMenuByOverlayClick);
};
const showMobileMenu = () => {
  mobMenu.style = 'display: block;';
};
const hideMobileMenuByOverlayClick = (e) => {
  if (e.target === e.currentTarget) {
    hideMobileMenu();
  }
};
const hideMobileMenu = () => {
  mobMenu.style = 'display: none;';
};
