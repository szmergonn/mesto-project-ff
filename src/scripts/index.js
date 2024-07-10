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