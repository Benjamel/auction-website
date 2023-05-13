import * as listMethods from '../api/auth/listings/index.mjs';

export function listTemplate(postDataList, parent) {
  const listingCardsTemplate = document.querySelector('#listingCards');

  postDataList.forEach((postData) => {
    const listingElement = document.importNode(
      listingCardsTemplate.content,
      true
    ).firstElementChild;

    const cardLink = listingElement.querySelector('#cardLink');
    cardLink.addEventListener('click', (event) => {
      event.preventDefault();
      navigateToListing(postData.id);
    });

    const listingImage = listingElement.querySelector('#listingImage');
    listingImage.src = postData.media[0];
    listingImage.alt = postData.title;

    const listingTitle = listingElement.querySelector('#listingTitle');
    listingTitle.innerText = postData.title;

    const listingDescription = listingElement.querySelector('#listingDescription');
    listingDescription.innerText = postData.description;

    const listingDate = listingElement.querySelector('#listingDate');
    listingDate.querySelector('small').innerText = new Date(postData.endsAt).toLocaleDateString();

    parent.appendChild(listingElement);
  });
}

export async function renderListings() {
  const postDataList = await listMethods.getListings();
  const parent = document.querySelector('#allListings');
  listTemplate(postDataList, parent);
}

function navigateToListing(listingId) {
  window.location.href = `/listing/index.html?id=${listingId}`;
}
