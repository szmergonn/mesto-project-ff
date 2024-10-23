import { removeCard, deleteLikeCard, addLikeCard } from "./api";

 // Темплейт карточки
 const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(cardData, deleteCardCallback, likeCardCallback, imagePopupCallback, userId) {
  // клонировать шаблон
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  // установить значения вложенных элементов
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikecounter = cardElement.querySelector('.card__like-counter');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardLikecounter.textContent = cardData.likes.length;

  // добавить к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк
  const deleteButton = cardElement.querySelector('.card__delete-button');
  if (cardData.owner._id !== userId) {
    deleteButton.style.display = 'none'
  } else {
    deleteButton.addEventListener('click', function() {
      deleteCardCallback(cardElement, cardData._id);
    });
  }

   // добавить обработчик клика на лайк
   const likeButton = cardElement.querySelector('.card__like-button');
   const isLiked = cardData.likes.some((like) => like._id === userId);

   if(isLiked) {
    likeButton.classList.add('card__like-button_is-active')
   }
  
   likeButton.addEventListener('click', function() {
     likeCardCallback(likeButton, cardLikecounter, cardData);
   });

  // добавить обработчик клика на изображение
  cardImage.addEventListener('click', function() {
    imagePopupCallback(cardData.link, cardData.name);
  });

  return cardElement;
}

// Функция удаления карточки
export function deleteCard(cardElement, cardId) {
  removeCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(`Error in deleting card: ${err}`)
    })
  
}

export function toggleLike(likeButton, cardLikeCounter, cardData) {
  const isLiked = likeButton.classList.contains('card__like-button_is-active');

  if (isLiked) {
    deleteLikeCard(cardData._id)
      .then((updateCardData) => {
        cardLikeCounter.textContent = updateCardData.likes.length;
        likeButton.classList.remove('card__like-button_is-active');
      })
      .catch((err) => {
        console.error(`Error in deleting like from card: ${err}`);
      });
  } else {
    addLikeCard(cardData._id)
      .then((updateCardData) => {
        cardLikeCounter.textContent = updateCardData.likes.length;
        likeButton.classList.add('card__like-button_is-active');
      })
      .catch((err) => {
        console.error(`Error adding like on card: ${err}`);
      });
    }
}
