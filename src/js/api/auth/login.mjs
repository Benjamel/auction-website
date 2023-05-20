import { API_URL } from '../constants.mjs';
import * as storage from '../storage/index.mjs';

const method = 'POST';
const action = 'auth/login';

export async function loginFormListener(profile) {
  const loginUrl = API_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();

  storage.save('accessToken', accessToken);
  delete profile.accessToken;
  storage.save('profile', user);

  if (response.ok) {
    window.location.href = '/index.html';
  } else {
    alert('Wrong login information!');
    throw new Error(data.message);
  }
}
