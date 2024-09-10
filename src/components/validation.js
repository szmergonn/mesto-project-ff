// Константы для классов и селекторов
export const formSelector = document.querySelector('.popup__form');

// Функция для отображения ошибки
const showInputError = (formSelector, inputSelector, errorMessage) => {
  // Поиск элемента ошибки по id
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);

  errorElement.textContent = errorMessage;
  inputSelector.classList.add('popup__input_type_error');
  errorElement.classList.add('popup__input-error_visible');
}

const hideInputError = (formSelector, inputSelector) => {
  // Поиск элемента ошибки по id
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);

  errorElement.textContent = '';
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_visible');
}

const isValid = (formSelector, inputSelector) => {
  if(inputSelector.validity.patternMismatch) {
    inputSelector.setCustomValidity(inputSelector.dataset.errorMessage);
  } else {
    inputSelector.setCustomValidity("")
  }

  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector);
  }
}

const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => isValid(formSelector, inputSelector));
  })
}

const enableValidation = () => {
  const formList = document.querySelectorAll('.popup__form');

  formList.forEach((formElement) => {
    setEventListeners(formElement)
  })
}
enableValidation()

export const validationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}); 

export const clearValidation = (profileForm, validationConfig) => {
  const inputList = Array.from(profileForm.querySelectorAll(`${validationConfig.inputSelector}`));

  inputList.forEach((inputElement) => {
    inputElement.classList.remove(`${validationConfig.inputErrorClass}`);

    const errorElement = profileForm.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = '';
    errorElement.classList.remove(`${validationConfig.errorClass}`)
  })
}

const toggleButton = (formSelector, buttonElement) => {

  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));

  if (inputList.some((inputElement) => inputElement.classList.contains('popup__input_type_error'))) {
    buttonElement.classList.add('popup__button_disabled');
  } else {
    buttonElement.classList.remove('popup__button_disabled');
  }

}