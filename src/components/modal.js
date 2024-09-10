import {
  popupTypeNewCard,
  formNewCard
} from "./constants";

import {
  clearValidation,
  validationConfig,
  formSelector
} from "./validation";

export function openModal(modal) {
  document.addEventListener('keydown', closeModalByEscape);
  modal.classList.add('popup_is-animated');
  if(modal.querySelector('.popup__form[name="new-place"]')) {
    clearValidation(formNewCard, validationConfig)
  } else if(modal.querySelector('.popup__form[name="edit-profile"]')) {
    clearValidation(formSelector, validationConfig)
  }
  setTimeout(() => {
    modal.classList.add('popup_is-opened');
  }, 1);
}

export function closeModal(modal) {
  document.removeEventListener('keydown', closeModalByEscape);
  modal.classList.remove('popup_is-opened');
  if(modal.querySelector('.popup__form[name="new-place"]')) {
    clearValidation(formNewCard, validationConfig)
  } else if(modal.querySelector('.popup__form[name="edit-profile"]')) {
    clearValidation(formSelector, validationConfig)
  }
  
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