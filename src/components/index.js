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
  cardsContainer,
  popupTypeNewCard,
  popupTypeEdit,
  profileAddButton,
  profileEditButton,
  popups,
  popupImage,
  popupCaption,
  imagePopup,
  formNewCard,
  formNewAvatar,
  placeNameInput,
  placeLinkInput,
  profileTitle,
  profileForm,
  nameInput,
  jobInput,
  profileDescription,
  profileImage,
  profileImageOverlay,
  popupTypeNewAvatar
} from "./constants.js"
import "../pages/index.css";
import { openModal, closeModal, handleCloseModalByClick } from "./modal.js";
import { clearValidation, enableValidation, validationConfig, toggleButton } from "./validation.js"


const profileSaveButton = profileForm.querySelector(validationConfig.submitButtonSelector);
const cardSaveButton = formNewCard.querySelector(validationConfig.submitButtonSelector);
const avatarSaveButton = formNewAvatar.querySelector(validationConfig.submitButtonSelector);
const avatarInput = formNewAvatar.querySelector('.popup__input_type_url');

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileSaveButton.textContent = 'Сохранение...';

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
      profileSaveButton.textContent = 'Сохранить'
    })
}

function handleProfileImageClick() {
  clearValidation(formNewAvatar, validationConfig);
  formNewAvatar.reset();
  openModal(popupTypeNewAvatar)
}

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };

  cardSaveButton.textContent = 'Создание...';

  addNewCard(newCard.name, newCard.link)
    .then((cardData) => {
      const userId = cardData.owner._id;
      cardsContainer.prepend(createCard(cardData, deleteCard, toggleLike, openImagePopup, userId));

      clearValidation(formNewCard, validationConfig);
      formNewCard.reset();
      closeModal(popupTypeNewCard); 
    })
    .catch((err) => {
      console.log(`Error in adding a new card: ${err}`)
    })
    .finally(() => {
      cardSaveButton.textContent = 'Создать'
    })
}

function handleNewAvatarSubmit(evt) {
  evt.preventDefault();

  avatarSaveButton.textContent = 'Сохранение...';
  updateAvatar(avatarInput.value) 
    .then((updatedUserData) => {
      profileImage.style.backgroundImage = `url(${updatedUserData.avatar})`;

      closeModal(popupTypeNewAvatar);
    })
    .catch((err) => {
      console.log(`Error in updating avatar: ${err}`)
    })
    .finally(() => {
      avatarSaveButton.textContent = 'Сохранить'
    })
}

export function openImagePopup(imageLink, imageCaption) {
  popupImage.src = imageLink;
  popupImage.alt = imageCaption;
  popupCaption.textContent = imageCaption;

  openModal(imagePopup);
}


Promise.all([getUserData(), getInitialCards()])
  .then(([userData, cards]) => {
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.style.backgroundImage = `url(${userData.avatar})`

    const userId = userData._id

    cards.forEach((cardData) => {
      cardsContainer.append(createCard(cardData, deleteCard, toggleLike, openImagePopup, userId));
    })
  })
  .catch((err) => {
    console.log(`Error in userData or cardsData: ${err}`)
  })
  
popups.forEach((popup) => {
  popup.addEventListener('click', handleCloseModalByClick);
});

profileImageOverlay.addEventListener('click', handleProfileImageClick)

profileForm.addEventListener('submit', handleProfileFormSubmit);

formNewCard.addEventListener('submit', handleNewCardSubmit);

formNewAvatar.addEventListener('submit', handleNewAvatarSubmit)

profileAddButton.addEventListener('click', () => {
  // cardSaveButton.classList.add(validationConfig.inactiveButtonClass);
  openModal(popupTypeNewCard);
})

profileEditButton.addEventListener('click', () => {
  clearValidation(profileForm, validationConfig);
  openModal(popupTypeEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
})

enableValidation(validationConfig);