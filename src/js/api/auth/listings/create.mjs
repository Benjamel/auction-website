import { API_URL } from '../../constants.mjs';
import { authFetch } from '../../headers.mjs';

const action = 'listings';
const method = 'POST';

export async function createList(listData) {
  try {
    const response = await authFetch(`${API_URL}${action}`, {
      method,
      body: JSON.stringify(listData),
    });
    console.log(response);

    if (response.ok) {
      const listing = await response.json();
      const listingId = listing.id;
      console.log('Listing was successfully made with ID:', listingId);
      return listingId;
    } else {
      console.error('Failed to make a listing');
      return null;
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
}
