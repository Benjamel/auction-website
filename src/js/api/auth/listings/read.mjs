import { API_URL } from '../../constants.mjs';
import { authFetch } from '../../headers.mjs';

const action = 'listings';

export async function getListings() {
  const updateListsUrl = `${API_URL}${action}?_active=true&sort=created&sortOrder=desc`;

  const response = await authFetch(updateListsUrl);

  return await response.json();
}

export async function getListing(id) {
  if (!id) {
    throw new Error('Get requires a postID');
  }

  const updateListUrl = `${API_URL}${action}/${id}?_seller=true&_bids=true`;

  const response = await authFetch(updateListUrl);

  const result = await response.json();

  return result;
}
