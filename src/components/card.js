// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(cardData, deleteCardCallback, likeCardCallback, imagePopupCallback) {

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