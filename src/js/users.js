import { fetchData } from './fetch.js';

const getMe = async () => {
  const token = localStorage.getItem('token');
  if (!token) return { error: 'No token found' };

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await fetchData('http://localhost:3000/api/users/me', options);
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  window.location.href = 'index.html';
};

export { getMe, logout };
