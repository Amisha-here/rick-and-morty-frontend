import axios from 'axios';

const API = axios.create({ baseURL: 'https://rick-and-morty-backend.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

export const fetchCards = () => API.get('/cards');
export const createCard = (newCard) => API.post('/cards', newCard);
export const deleteCard = (id) => API.delete(`/cards/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
