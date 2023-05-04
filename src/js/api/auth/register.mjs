import * as constants from '../constants.mjs';

const action = '/auth/register';
const method = 'POST';

export async function registerUser(profile) {
  try {
    const registerURL = constants.API_BASE_URL + action;
    console.log(registerURL);

    const postData = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    };

    const response = await fetch(registerURL, postData);
    console.log(response);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    throw new Error(`Failed to register user: ${error.message}`);
  }
}
