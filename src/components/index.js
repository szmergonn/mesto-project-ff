import {
  getInitialCards,
  addNewCard,
  getUserData,
  editUserData,
  updateAvatar
} from "./api.js"
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
  formNewAvatar,
  placeNameInput,
  placeLinkInput,
  profileTitle,
  formElement,
  nameInput,
  jobInput,
  profileDescription,
  profileImage,
  profileImageOverlay,
  popupTypeNewAvatar
} from "./constants.js"
import "../pages/index.css";
import { openModal, closeModal } from "./modal.js";
import { clearValidation, enableValidation, validationConfig } from "./validation.js"

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

Promise.all([getUserData(), getInitialCards()])
  .then(([userData, cards]) => {
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.style.backgroundImage = `url(${userData.avatar})`

    const userId = userData._id

    cards.forEach((cardData) => {
      placeList.append(createCard(cardData, deleteCard, toggleLike, openImagePopup, userId));
    })
  })
  .catch((err) => {
    console.log(`Error in userData or cardsData: ${err}`)
  })
  
profileImageOverlay.addEventListener('click', () => {
  clearValidation(formNewAvatar, validationConfig);
  formNewAvatar.reset();
  openModal(popupTypeNewAvatar)
})

profileAddButton.addEventListener('click', () => {
  clearValidation(formNewCard, validationConfig);
  openModal(popupTypeNewCard);
})

profileEditButton.addEventListener('click', () => {
  clearValidation(formElement, validationConfig);
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
  const saveButton = formElement.querySelector(validationConfig.submitButtonSelector);
  saveButton.textContent = 'Сохранение...';

  editUserData(nameValue, jobValue)
    .then((newData) => {
      profileTitle.textContent = newData.name;
      profileDescription.textContent = newData.about;

      closeModal(popupTypeEdit);
    })
    .catch((err) => {
      console.log(`Error in updating profile ${err}`)
    })
    .finally(() => {
      saveButton.textContent = 'Сохранить'
    })
}

formElement.addEventListener('submit', handleProfileFormSubmit);

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };

  const saveButton = formNewCard.querySelector(validationConfig.submitButtonSelector);
  saveButton.textContent = 'Создание...';

  addNewCard(newCard.name, newCard.link)
    .then((cardData) => {
      const userId = cardData.owner._id;
      placeList.prepend(createCard(cardData, deleteCard, toggleLike, openImagePopup, userId));

      formNewCard.reset();
      closeModal(popupTypeNewCard); 
    })
    .catch((err) => {
      console.log(`Error in adding a new card: ${err}`)
    })
    .finally(() => {
      saveButton.textContent = 'Создать'
    })
}

formNewCard.addEventListener('submit', handleNewCardSubmit);

function handleNewAvatarSubmit(evt) {
  evt.preventDefault();

  const avatarLink = formNewAvatar.querySelector('.popup__input_type_url').value;
  const saveButton = formNewAvatar.querySelector(validationConfig.submitButtonSelector);
  saveButton.textContent = 'Сохранение...';
  updateAvatar(avatarLink) 
    .then((updatedUserData) => {
      profileImage.style.backgroundImage = `url(${updatedUserData.avatar})`;

      formNewAvatar.reset();
      closeModal(popupTypeNewAvatar);
    })
    .catch((err) => {
      console.log(`Error in updating avatar: ${err}`)
    })
    .finally(() => {
      saveButton.textContent = 'Сохранить'
    })
}

formNewAvatar.addEventListener('submit', handleNewAvatarSubmit)

export function openImagePopup(imageLink, imageCaption) {
  popupImage.src = imageLink;
  popupImage.alt = imageCaption;
  popupCaption.textContent = imageCaption;

  openModal(imagePopup);
}

enableValidation(validationConfig);