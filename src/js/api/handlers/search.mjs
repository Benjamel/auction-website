import { listTemplate, renderListings } from '../../templates/listings.mjs';
import { getListings } from '../auth/listings/read.mjs';

export function searchForm() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearch);
}

async function handleSearch(event) {
  const searchValue = event.target.value.trim().toLowerCase();

  const postDataList = await getListings();
  const searchResults = filterListings(postDataList, searchValue);

  const listingContainer = document.querySelector('#allListings');
  listingContainer.innerHTML = '';

  if (searchResults.length > 0) {
    listTemplate(searchResults, listingContainer);
  } else {
    listingContainer.innerText = 'No results found.';
    listingContainer.style.color = 'white';
  }
}

function filterListings(listings, query) {
  return listings.filter((listing) => {
    const title = listing.title ? listing.title.toLowerCase() : '';
    const description = listing.description ? listing.description.toLowerCase() : '';
    return title.includes(query) || description.includes(query);
  });
}
