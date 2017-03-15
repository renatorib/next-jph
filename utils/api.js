// @flow

import { create } from 'axios';

const api = create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
  timeout: 10000,
});

api.getUsers = (): Promise<Object> =>
  api.get('/users');

api.getUser = (id): Promise<Object> =>
  api.get(`/users/${id}`);

api.getPostsByUserId = (id): Promise<Object> =>
  api.get(`/posts?userId=${id}`);

export default api;
