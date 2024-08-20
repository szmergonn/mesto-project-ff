import { 
  initialCards,
  createCard,
  deleteCard,
  toggleLike
 } from "./cards.js";
import "../pages/index.css";
import { openModal, closeModal, openImagePopup } from "./modal.js";

const addIcon = new URL("../images/add-icon.svg", import.meta.url);
const avatar = new URL("../images/avatar.jpg", import.meta.url);
const cardOne = new URL("../images/card_1.jpg", import.meta.url);
const cardTwo = new URL("../images/card_2.jpg", import.meta.url);
const cardThree = new URL("../images/card_3.jpg", import.meta.url);
const closeIcon = new URL("../images/close.svg", import.meta.url);
const deleteIcon = new URL("../images/delete-icon.svg", import.meta.url);
const editIcon = new URL("../images/edit-icon.svg", import.meta.url);
const likeActiveIcon = new URL("../images/like-active.svg", import.meta.url);
const likeInactiveIcon = new URL("../images/like-inactive.svg", import.meta.url);
const logoIcon = new URL("../images/logo.svg", import.meta.url);

export const images = [
  { name: "addIcon", link: addIcon },
  { name: "avatar", link: avatar },
  { name: "cardOne", link: cardOne },
  { name: "cardTwo", link: cardTwo },
  { name: "cardThree", link: cardThree },
  { name: "closeIcon", link: closeIcon },
  { name: "deleteIcon", link: deleteIcon },
  { name: "editIcon", link: editIcon },
  { name: "likeActiveIcon", link: likeActiveIcon },
  { name: "likeInactiveIcon", link: likeInactiveIcon },
  { name: "logoIcon", link: logoIcon }
]


const placeList = document.querySelector('.places__list');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupsCloseButton = document.querySelectorAll('.popup__close');


// Вывести карточки на страницу
initialCards.forEach((cardData) => {
  placeList.append(createCard(cardData, deleteCard, toggleLike, openImagePopup));
})

profileAddButton.addEventListener('click', () => {
  openModal(popupTypeNewCard);
})

profileEditButton.addEventListener('click', () => {
  openModal(popupTypeEdit);
})
 
popupsCloseButton.forEach((element => {
  element.addEventListener('click', () => {
    const popup = element.closest('.popup');
    closeModal(popup);
  });
}));

document.addEventListener('click', (event) => {
  const popup = event.target.closest('.popup');
  if (popup) {
    const popupContent = event.target.closest('.popup__content');
    if (!popupContent) {
      closeModal(popup);
    }
  }
});

// Title and form
const profileTitle = document.querySelector('.profile__title');
const formElement = document.querySelector('.popup__form[name="edit-profile"]');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileDescription = document.querySelector('.profile__description');

nameInput.placeholder = profileTitle.textContent;
jobInput.placeholder = profileDescription.textContent; 

function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  closeModal(popupTypeEdit);
}

formElement.addEventListener('submit', handleFormSubmit);

const formNewCard = document.querySelector('.popup__form[name="new-place"]');

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const placeNameInput = formNewCard.querySelector('.popup__input_type_card-name');
  const placeLinkInput = formNewCard.querySelector('.popup__input_type_url');

  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };

  placeList.prepend(createCard(newCard, deleteCard, toggleLike, openImagePopup));
  closeModal(popupTypeNewCard);
}

formNewCard.addEventListener('submit', handleNewCardSubmit);