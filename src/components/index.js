import {
  initialCards
} from "./cards.js"
import { 
  createCard,
  deleteCard,
  toggleLike
 } from "./card.js";
import {
  placeList,
  popupTypeNewCard,
  popupTypeEdit,
  profileAddButton,
  profileEditButton,
  popups,
  addIcon,
  avatar,
  cardOne,
  cardTwo,
  cardThree,
  closeIcon,
  deleteIcon,
  editIcon,
  likeActiveIcon,
  likeInactiveIcon,
  logoIcon,
  popupImage,
  popupCaption,
  imagePopup,
  formNewCard,
  placeNameInput,
  placeLinkInput,
  profileTitle,
  formElement,
  nameInput,
  jobInput,
  profileDescription
} from "./constants.js"
import "../pages/index.css";
import { openModal, closeModal } from "./modal.js";

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

// Вывести карточки на страницу
initialCards.forEach((cardData) => {
  placeList.append(createCard(cardData, deleteCard, toggleLike, openImagePopup));
})

profileAddButton.addEventListener('click', () => {
  openModal(popupTypeNewCard);
})

profileEditButton.addEventListener('click', () => {
  openModal(popupTypeEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
})

popups.forEach((popup) => {
  popup.addEventListener(('click'), (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
      closeModal(popup);
    }
  })
}) 

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  closeModal(popupTypeEdit);
}

formElement.addEventListener('submit', handleProfileFormSubmit);

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };

  placeList.prepend(createCard(newCard, deleteCard, toggleLike, openImagePopup));

  formNewCard.reset();

  closeModal(popupTypeNewCard); 
}

formNewCard.addEventListener('submit', handleNewCardSubmit);

export function openImagePopup(imageLink, imageCaption) {
  popupImage.src = imageLink;
  popupImage.alt = imageCaption;
  popupCaption.textContent = imageCaption;

  openModal(imagePopup);
}