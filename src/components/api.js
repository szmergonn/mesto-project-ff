const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-13',
    headers: {
        authorization: '05246ec5-b7d7-4e33-9a19-fee33f4bf6d9',
        'Content-Type': 'application/json'
    }
}

// Обработка ответа от сервера
const handleResponse = (res) => {
    if(res.ok) {
        return res.json();
    } else return Promise.reject(`Ошибка: ${res.status}`);
} 

// Загрузка информации о пользователе с сервера
const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then((res) => handleResponse(res))
}

// Загрузка карточек с сервера
const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then((res) => handleResponse(res))
}

// Редактирование профиля
const editUserData = (profileTitle, profileDescription) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: profileTitle,
            about: profileDescription 
        })
    })
        .then((res) => handleResponse(res))
}

// Добавление новой карточки
const addNewCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
        method: 'POST',
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then((res) => handleResponse(res))
}