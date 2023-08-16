import { openModal } from './modal';

const form = document.querySelector('#form-registration');

export const initRegistration = () => {
  form.addEventListener('submit', handleFormSubmit);
};

const createHtmlMarkup = ({ name, phone, message }) => {
  return `
    <p class="registration__modal-name">${name}</p>
    <p class="registration__modal-phone">${phone}</p>
    <p class="registration__modal-message">${message}</p>
    <p class="registration__modal-title">Ваша заявка принята. Мы с Вами свяжемся в ближайшее время.</p>
  `;
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const phone = e.target.elements.phone.value;
  const message = e.target.elements.message.value;

  const modalContent = document.createElement('div');
  modalContent.classList.add('registration__modal-content');

  modalContent.innerHTML = createHtmlMarkup({ name, message, phone });

  openModal(modalContent);
  e.target.reset();
};
