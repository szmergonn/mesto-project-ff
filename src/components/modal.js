export function openModal(modal) {
  document.addEventListener('keydown', closeModalByEscape);
  modal.classList.add('popup_is-opened');
}

export function closeModal(modal) {
  document.removeEventListener('keydown', closeModalByEscape);
  modal.classList.remove('popup_is-opened');
}

function closeModalByEscape(event) {
  if (event.key === 'Escape') {
    const openPopup = document.querySelector('.popup.popup_is-opened');
    if (openPopup) {
      closeModal(openPopup);
    }
  }
} 

export function handleCloseModalByClick(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
    closeModal(evt.currentTarget);
  }
}