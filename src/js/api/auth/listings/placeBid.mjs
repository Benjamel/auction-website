import { API_URL } from '../../constants.mjs';
import { authFetch } from '../../headers.mjs';

const action = 'listings/';
const method = 'POST';

export async function enterBid(listingId, bidAmount) {
  try {
    const response = await authFetch(`${API_URL}${action}${listingId}/bids`, {
      method,
      body: JSON.stringify({
        amount: bidAmount,
      }),
    });
    console.log(response);
    if (response.ok) {
      console.log('Bid placed successfully');
      location.reload();
    } else {
      console.error('Failed to place bid');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
