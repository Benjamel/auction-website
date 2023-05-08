import { API_URL } from '../../constants.mjs';
import { authFetch } from '../../headers.mjs';

const action = 'listings/';
const method = 'delete';

export async function updateList(id) {
  if (!id) {
    throw new Error('Delete requires postID');
  }

  const deleteListUrl = `${API_URL}${action}${id}`;

  const response = await authFetch(deleteListUrl, {
    method,
  });

  console.log(response);
  return await response.json();
}
