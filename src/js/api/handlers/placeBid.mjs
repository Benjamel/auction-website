import { enterBid } from '../auth/listings/placeBid.mjs';
import { isLoggedIn } from '../auth/state.mjs';
import { load } from '../storage/index.mjs';
import { getListing } from '../auth/listings/read.mjs';

export function bidFormListener() {
  const bidForm = document.querySelector('#placeBid');
  bidForm.addEventListener('submit', handleBid);
}

async function handleBid(event) {
  event.preventDefault();
  const searchParams = new URLSearchParams(window.location.search);
  const listId = searchParams.get('id');

  const bidInput = document.querySelector('#enterAmount');
  const bidAmount = parseFloat(bidInput.value);

  if (isLoggedIn()) {
    const { name } = load('profile');

    const listingDetails = await getListing(listId);
    const sellerName = listingDetails.seller.name;

    if (name === sellerName) {
      alert('You cant bid on your own listing.');
    } else {
      const listingId = listId;
      enterBid(listingId, bidAmount);

      bidInput.value = '';
    }
  } else {
    alert('You need to be logged in to place a bid');
  }
}
