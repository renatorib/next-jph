import api from './api';

test('api working check', async () => {
  const users = await api.get('/users');
  expect(users.data).toBeTruthy();
});
