import { API_URL } from '../constants.mjs';
import { authFetch } from '../headers.mjs';
import { headers } from '../headers.mjs';

const method = 'GET';
const action = 'profiles/';

export async function getProfile(name) {
  const options = {
    method,
    headers: headers(),
  };
  try {
    const response = await authFetch(`${API_URL}${action}${name}?_listings=true`, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch {
    console.log(error);
  }
}

export async function getProfiles() {
  const options = {
    method,
    headers: headers(),
  };

  try {
    const response = await authFetch(`${API_URL}${action}?_listings=true`, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch {
    console.log(error);
  }
}

// export async function getProfile(accessToken, name) {
//   const options = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//       Authorization: `Bearer ${accessToken}`,
//     },
//   };

//   try {
//     const response = await fetch(`${API_URL}${action}${name}?_listings=true`, options);
//     const result = response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }
