export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-24',
    headers: {
        authorization: '8faae9a4-4492-4049-9feb-e3b6c0b32404',
        'Content-Type': 'application/json'
    }
}

// Обработка ответа от сервера
export const handleResponse = (res) => {
    if(res.ok) {
        return res.json();
    } else return Promise.reject(`Ошибка: ${res.status}`);
} 

// Загрузка информации о пользователе с сервера
export const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then((res) => handleResponse(res))
}

// Загрузка карточек с сервера
export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then((res) => handleResponse(res))
}

// Редактирование профиля
export const editUserData = (profileTitle, profileDescription) => {
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
export const addNewCard = (name, link) => {
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

export const removeOldCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        headers: config.headers,
        method: 'DELETE'
    })
    .then((res) => handleResponse(res))
}

export const updateAvatar = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        headers: config.headers,
        method: 'PATCH',
        body: JSON.stringify({
            avatar: link
        })
    })
    .then((res) => handleResponse(res))
}