import { remove } from '../storage/index.mjs';

export function logoutFormListener() {
  const logoutBtn = document.querySelector('#logoutBtn');

  logoutBtn.addEventListener('click', () => {
    remove('accessToken');
    remove('credits');
    remove('profile');
    window.location.href = '/index.html';
  });
}
