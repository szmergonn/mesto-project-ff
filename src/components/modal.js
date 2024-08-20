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
  setTimeout(() => {
    modal.classList.remove('popup_is-animated');
  }, 600);
  const forms = document.querySelectorAll('form');
  forms.forEach(form => form.reset())
}

export function openImagePopup(imageLink, imageCaption) {
  const popupImage = document.querySelector('.popup_type_image .popup__image');
  const popupCaption = document.querySelector('.popup_type_image .popup__caption');

  popupImage.src = imageLink;
  popupImage.alt = imageCaption;
  popupCaption.textContent = imageCaption;
  
  const imagePopup = document.querySelector('.popup_type_image');
  openModal(imagePopup);
}

function closeModalByEscape(event) {
  if (event.key === 'Escape') {
    const openPopup = document.querySelector('.popup.popup_is-opened');
    if (openPopup) {
      closeModal(openPopup);
    }
  }
} 