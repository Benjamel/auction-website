import { API_BASE_URL } from '../constants.mjs';
import { authFetch } from '../headers.mjs';

const method = 'PUT';
const action = '/auction/profiles/';

export async function editProfile(profileData) {
  if (!profileData.name) {
    throw new Error('Edit requires a name');
  }

  const editProfileURL = `${API_BASE_URL + action + profileData.name}/media`;

  const response = await authFetch(editProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  console.log(response);

  return await response.json();
}
