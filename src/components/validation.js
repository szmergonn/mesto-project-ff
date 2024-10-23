export const validationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}); 

// Функция для нахождения ошибки
const showInputError = (formSelector, inputSelector, errorMessage, config) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);

  errorElement.textContent = errorMessage;
  inputSelector.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
}

// Функция для сброса ошибки
const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);

  errorElement.textContent = '';
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_visible');
}

// Функция проверяющая валидность
const isValid = (formSelector, inputSelector, config) => {
  if(inputSelector.validity.patternMismatch) {
    inputSelector.setCustomValidity(inputSelector.dataset.errorMessage);
  } else {
    inputSelector.setCustomValidity("")
  }

  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage, config);
  } else {
    hideInputError(formSelector, inputSelector, config);
  }
}

// Функция для добавления обработчика событий
const setEventListeners = (formSelector, config) => {
  const inputList = Array.from(formSelector.querySelectorAll(config.inputSelector));
  const buttonElement = formSelector.querySelector(config.submitButtonSelector);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      isValid(formSelector, inputSelector, config)
      toggleButton(formSelector, buttonElement, config);
    });
  })
}

// Функция активирующая валидацию по конфигу
export const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);

  formList.forEach((formElement) => {
    setEventListeners(formElement, config)
  })
}

// Функция очищающая валидацию
export const clearValidation = (profileForm, validationConfig) => {
  const inputList = Array.from(profileForm.querySelectorAll(`${validationConfig.inputSelector}`));

  inputList.forEach((inputElement) => {
    const buttonElement = profileForm.querySelector(validationConfig.submitButtonSelector);
    inputElement.classList.remove(`${validationConfig.inputErrorClass}`);

    const errorElement = profileForm.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = '';
    errorElement.classList.remove(`${validationConfig.errorClass}`);
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.disabled = true;
  })
}

// Функция включения и отключения кнопки
export const toggleButton = (formSelector, buttonElement, config) => {
  const inputList = Array.from(formSelector.querySelectorAll(config.inputSelector));
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);

  if(hasInvalidInput) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}