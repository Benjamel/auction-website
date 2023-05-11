import { enterBid } from '../auth/listings/placeBid.mjs';

export function bidFormListener() {
  const bidForm = document.querySelector('#placeBid');
  bidForm.addEventListener('submit', handleBid);
}

function handleBid(event) {
  event.preventDefault();
  const searchParams = new URLSearchParams(window.location.search);
  const listId = searchParams.get('id');

  const bidInput = document.querySelector('#enterAmount');
  const bidAmount = parseFloat(bidInput.value);

  const listingId = listId;
  enterBid(listingId, bidAmount);

  bidInput.value = '';
}
