export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

// Функция создания карточки
export function createCard(cardData, deleteCardCallback, likeCardCallback, imagePopupCallback) {
  // Темплейт карточки
  const cardTemplate = document.querySelector('#card-template').content;

  // клонировать шаблон
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  // установить значения вложенных элементов
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // добавить к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function() {
    deleteCardCallback(cardElement);
  });

   // добавить обработчик клика на лайк
   const likeButton = cardElement.querySelector('.card__like-button');
   likeButton.addEventListener('click', function() {
     likeCardCallback(likeButton);
   });

  // добавить обработчик клика на изображение
  cardImage.addEventListener('click', function() {
    imagePopupCallback(cardData.link, cardData.name);
  });

  return cardElement;
}

// Функция удаления карточки
export function deleteCard(cardElement) {
  cardElement.remove();
}

// Функция обработки лайка
export function toggleLike(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active');
}