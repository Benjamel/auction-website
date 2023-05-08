import { API_URL } from '../constants.mjs';

const action = 'auth/register';
const method = 'post';

export async function registerUser(profile) {
  const registerURL = API_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    method,
    body,
  });

  const result = await response.json();
  console.log(result);
}
