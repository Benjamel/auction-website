import { API_URL } from '../constants.mjs';
import { authFetch } from '../headers.mjs';

const method = 'GET';
const action = 'profiles/';

export async function getProfile(name) {
  const getProfileURL = `${API_URL}${action}${name}?_listings=true`;
  try {
    const response = await authFetch(getProfileURL);
    if (response.ok) {
      const responseBody = await response.json();

      return responseBody;
    } else {
      console.error('failed to fetch profile:', response.statusText);
      return null;
    }
  } catch (error) {
    console.log('An error occurred while fetching profile', error);
    return null;
  }
}

export async function getProfileListings(name) {
  const getProfileURL = `${API_URL}${action}${name}/listings?_active=true`;
  try {
    const response = await authFetch(getProfileURL);
    if (response.ok) {
      const responseBody = await response.json();

      return responseBody;
    } else {
      console.error('failed to fetch profile:', response.statusText);
      return null;
    }
  } catch (error) {
    console.log('An error occurred while fetching profile', error);
    return null;
  }
}

export async function getProfiles() {
  const getProfilesURL = `${API_URL}${action}?_listings=true`;
  const response = await authFetch(getProfilesURL);
  return await response.json();
}
