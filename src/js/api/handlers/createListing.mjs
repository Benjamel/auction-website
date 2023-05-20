import { createList } from '../auth/listings/index.mjs';

export function createFormListener() {
  const listingForm = document.querySelector('#listingForm');
  listingForm.addEventListener('submit', handleListingForm);
}

async function handleListingForm(event) {
  event.preventDefault();

  const titleInput = document.querySelector('#createTitle');
  const descriptionInput = document.querySelector('#createDescription');
  const mediaInput = document.querySelector('#createMedia');
  const dateInput = document.querySelector('#createDate');

  const newListing = {
    title: titleInput.value,
    description: descriptionInput.value,
    media: mediaInput.value ? [mediaInput.value] : [],
    endsAt: new Date(dateInput.value),
  };

  const listingId = await createList(newListing);

  if (listingId) {
    window.location.href = `/listing/index.html?id=${listingId}`;
  }
}
