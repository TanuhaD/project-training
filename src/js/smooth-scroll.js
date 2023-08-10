export const smoothScroll = () => {
  const mobileMenu = document.querySelector('#mobile-menu');
  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      mobileMenu.style = 'display: none;';
      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
};
