import { createList } from '../auth/listings/create.mjs';

export function createListFormListener() {
  const form = document.querySelector('#listingForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createList(post);
      console.log(post);
    });
  }
}
