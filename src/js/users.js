import { fetchData } from './fetch.js';

// kirjautuneen käyttäjän tiedot backendistä
const getMe = async () => {
  const token = localStorage.getItem('token');
  if (!token) return { error: 'No token found' };

  // tokenin tarkistus
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await fetchData('http://localhost:3000/api/users/me', options);
};

// kirjautuminen ulos
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  window.location.href = 'index.html';
};

export { getMe, logout };
