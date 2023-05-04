import * as constants from '../constants.mjs';
import { headers } from '../headers.mjs';
import { save } from '../storage/index.mjs';

const method = 'POST';
const action = '/auth/login';

export async function loginFormListener() {
  const form = document.querySelector('#loginForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch(`${constants.API_BASE_URL + action}`, {
        method,
        headers: headers('application/json'),
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const profile = await response.json();
        save('token', profile.accessToken);
        delete profile.accessToken;
        save('profile', profile);

        console.log(response);
        // Does the user have to be redireted anywhere after being logged in?
        return profile;
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      throw new Error('Error loggin in.');
    }
  });
}
