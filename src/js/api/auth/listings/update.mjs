import { API_URL } from '../../constants.mjs';
import { authFetch } from '../../headers.mjs';

const action = 'listings/';
const method = 'PUT';

export async function removeList(postData) {
  if (!postData.id) {
    throw new Error('Update requires postID');
  }

  const updateListUrl = `${API_URL}${action}${postData.id}`;

  const response = await authFetch(updateListUrl, {
    method,
    body: JSON.stringify(postData),
  });

  console.log(response);
  return await response.json();
}
