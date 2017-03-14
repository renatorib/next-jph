import { create } from 'axios';

const api = create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
  timeout: 10000,
});

api.getUsers = () => api.get('/users');
api.getUser = id => api.get(`/users/${id}`);
api.getPostsByUserId = id => api.get(`/posts?userId=${id}`);

export default api;
