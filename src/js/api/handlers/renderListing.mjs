import { getListing } from '../auth/listings/read.mjs';

export async function renderSingleListing() {
  const searchParams = new URLSearchParams(window.location.search);
  const listingId = searchParams.get('id');

  const listing = await getListing(listingId);

  const {
    title,
    media,
    seller,
    _count: { bids: bidsAmount },
    description,
    bids,
    id,
    tags,
    endsAt,
  } = listing;

  console.log(listing);

  document.title = `Auction: ${listing.title}`;

  // Listing created by info
  document.querySelector('#listingImage').src = media[0];
  document.querySelector('#listingDescription').innerText = description;
  document.querySelector('#endingDate').innerText = new Date(endsAt).toLocaleDateString();
  // Update the page with the listing details
  document.querySelector('#listingName').innerText = seller.name;
  document.querySelector('#profileAvatar').src = seller.avatar;
  document.querySelector('#bidsAmount').innerText = `${bidsAmount}`;
  document.querySelector('#listingTitle').innerText = title;

  //Looping through the bids and rendering
  if (bids.length > 0) {
    const bidsArray = bids.map((bid) => bid.amount);
    const highestBid = Math.max(...bidsArray);
    const highestBidBy = bids.find((bid) => bid.amount === highestBid);
    document.querySelector('#highestBid').innerText = highestBid + ' Credits';
    document.querySelector('#highestBidBy').innerText = highestBidBy.bidderName;
  } else {
    document.querySelector('#highestBid').innerText = 'No bids';
    document.querySelector('#highestBidBy').innerText = '';
  }

  //The amount of days left of the auction listing
  const endDate = new Date(endsAt);
  const currentDate = new Date();
  const timeDifference = endDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  document.querySelector('#daysLeft').innerText = daysLeft;
}
