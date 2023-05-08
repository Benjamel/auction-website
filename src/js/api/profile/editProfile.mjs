import { API_URL } from '../constants.mjs';
import { save } from '../storage/index.mjs';
import { authFetch, headers } from '../headers.mjs';

const method = 'PUT';
const action = 'profiles/';

export async function editProfile(media, name) {
  const options = {
    method,
    headers: headers(),
    body: JSON.stringify({
      avatar: media,
    }),
  };

  try {
    const response = await authFetch(`${API_URL}${action}${name}/media`, options);
    const result = await response.json();
    if (response.ok) {
    }
    const { accessToken, credits, ...profile } = result;
    save('profile', profile);
  } catch (error) {
    console.log(error);
  }
}

// export async function editProfile(profileData) {
//   if (!profileData.name) {
//     throw new Error('Edit requires a name');
//   }

//   const editProfileURL = `${API_URL}${action}${profileData.name}/media`;

//   const response = await authFetch(editProfileURL, {
//     method,
//     body: JSON.stringify(profileData),
//   });

//   console.log(response);

//   return await response.json();
// }
