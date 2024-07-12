import { initialCards } from "./cards";
import "../pages/index.css";

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

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placeList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(cardData, deleteCardCallback) {
  // клонировать шаблон
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  // установить значения вложенных элементов
  const cardImage = cardTemplate.querySelector('.card__image');
  const cardTitle = cardTemplate.querySelector('.card__title');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // добавить к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function() {
    deleteCardCallback(cardElement);
  })

  return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
  placeList.append(createCard(cardData, deleteCard));
})



// POPUPS

const popupTypeNewCard = document.querySelector('.popup_type_new-card');

const popupTypeEdit = document.querySelector('.popup_type_edit')

const profileAddButton = document.querySelector('.profile__add-button');

const profileEditButton = document.querySelector('.profile__edit-button')

const popupsClose = document.querySelectorAll('.popup__close');

function openPopup(evt) {
  evt.style.display = "flex";
  document.addEventListener('keydown', keyHandler);
  evt.classList.add('popup_is-opened');
}

function closePopup(evt) {
  evt.style.display = "none";
  document.addEventListener('keydown', keyHandler);
  evt.classList.remove('popup_is-opened');
  const forms = document.querySelectorAll('form');
  forms.forEach(form => form.reset());
  // document.querySelector('.popup__form').reset();
}

function keyHandler(event) {
  if (event.key === 'Escape') {
    const openPopup = document.querySelector('.popup[style*="flex"]');
    if (openPopup) {
      closePopup(openPopup);
    }
  }
}

profileAddButton.addEventListener('click', () => {
  openPopup(popupTypeNewCard);
})

profileEditButton.addEventListener('click', () => {
  openPopup(popupTypeEdit);
})

popupsClose.forEach((element => {
  element.addEventListener('click', () => {
    const popup = element.closest('.popup');
    closePopup(popup);
  })
}))

document.addEventListener('click', (event) => {
  const popup = event.target.closest('.popup');
  if (popup) {
    const popupContent = event.target.closest('.popup__content');
    if (!popupContent) {
      closePopup(popup);
    }
  }
})

// Title and form
const profileTitle = document.querySelector('.profile__title');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeDescription = document.querySelector('.popup__input_type_description');
const profileDescription = document.querySelector('.profile__description')

popupInputTypeName.placeholder = profileTitle.textContent;
popupInputTypeDescription.placeholder = profileDescription.textContent; 



// Submit form
// Находим форму в DOM
const formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей

    const profileName = document.querySelector('.profile__title')
    const profileDescription = document.querySelector('.profile__description')

    // Вставьте новые значения с помощью textContent

    profileName.textContent = nameValue;
    profileDescription.textContent = jobValue;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);