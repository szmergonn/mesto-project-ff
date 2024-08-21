import {
  popupTypeNewCard,
  formNewCard
} from "./constants";

export function openModal(modal) {
  document.addEventListener('keydown', closeModalByEscape);
  modal.classList.add('popup_is-animated');
  setTimeout(() => {
    modal.classList.add('popup_is-opened');
  }, 1);
}

export function closeModal(modal) {
  document.removeEventListener('keydown', closeModalByEscape);
  modal.classList.remove('popup_is-opened');
  if(modal === popupTypeNewCard) {
    formNewCard.reset();
  }
  setTimeout(() => {
    modal.classList.remove('popup_is-animated');
  }, 600);
}

function closeModalByEscape(event) {
  if (event.key === 'Escape') {
    const openPopup = document.querySelector('.popup.popup_is-opened');
    if (openPopup) {
      closeModal(openPopup);
    }
  }
} 