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

// export async function loginFormListener() {
//   const form = document.querySelector('#loginForm');

//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       const response = await fetch(`${API_URL}${action}`, {
//         method,
//         headers: {
//           'Content-Type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const result = await response.json();
//       console.log(result);
//       if (response.ok) {
//         const { accessToken, credits, ...profile } = result;
//         save('accessToken', accessToken);
//         save('credits', credits);
//         save('profile', profile);

//         console.log('accessToken', accessToken);
//

//         return profile;
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Wrong password or username');
//       throw new Error('Error loggin in.');
//     }
//   });
// }
