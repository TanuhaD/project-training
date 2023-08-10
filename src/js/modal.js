const modal = document.querySelector('#modal');
const btnCloseModal = document.querySelector('#modal-close-btn');
const modalContent = document.querySelector('#modal__inner');
const body = document.querySelector('body');
export const initModal = () => {
  btnCloseModal.addEventListener('click', handleCloseModal);
};
const handleCloseModal = () => {
  body.classList.remove('modal-open');
  modalContent.innerHTML = '';
};
export const openModal = (...children) => {
  modalContent.append(...children);
  body.classList.add('modal-open');
};
