import { API_URL } from '../constants.mjs';
import { authFetch } from '../headers.mjs';

const method = 'GET';
const action = 'profiles/';

export async function getProfiles() {
  const getProfilesURL = `${API_URL}${action}?_listings=true`;
  const response = await authFetch(getProfilesURL);
  return await response.json();
}

export async function getProfile(name) {
  if (!name) {
    throw new Error('Get requires a profile name');
  }

  const getProfileURL = `${API_URL}${action}${name}?_listings=true`;
  const response = await authFetch(getProfileURL);
  return await response.json();
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
