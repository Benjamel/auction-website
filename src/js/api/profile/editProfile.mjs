import { API_URL } from '../constants.mjs';
import { load } from '../storage/index.mjs';
import { authFetch } from '../headers.mjs';

const method = 'PUT';
const action = 'profiles/';

export async function editProfile(avatarUrl) {
  const profile = load('profile');

  const { name, email, credits } = profile;

  const url = `${API_URL}${action}${name}/media`;

  const requestBody = {
    avatar: avatarUrl,
    name,
    email,
    credits,
  };

  try {
    const response = await authFetch(url, {
      method,
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      location.reload();
      console.log('Avatar updated successfully');
    } else {
      const errorResponse = await response.text();
      console.error('Failed to update avatar', errorResponse.error);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
