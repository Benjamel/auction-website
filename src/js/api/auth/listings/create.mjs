import { API_URL } from '../../constants.mjs';
import { authFetch } from '../../headers.mjs';

const action = 'listings';
const method = 'post';

export async function createList(postData) {
  const createListUrl = API_URL + action;

  const response = await authFetch(createListUrl, {
    method,
    body: JSON.stringify({ postData }),
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  console.log(response);
  return await response.json();
}
