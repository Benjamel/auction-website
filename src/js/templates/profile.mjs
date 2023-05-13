import { getProfile, getProfileListings } from '../api/profile/read.mjs';
import { load } from '../api/storage/index.mjs';
import { listTemplate } from './listings.mjs';

async function renderProfile(profile) {
  const nameElement = document.querySelector('#profileName');
  const emailElement = document.querySelector('#detailsEmail');
  const creditsElement = document.querySelector('#amountCredits');
  const avatarElement = document.querySelector('#profileAvatar');
  const listingsElement = document.querySelector('#amountListings');

  nameElement.textContent = profile.name;
  emailElement.textContent = profile.email;
  creditsElement.textContent = profile.credits;
  avatarElement.src = profile.avatar;
  listingsElement.textContent = profile._count.listings;

  const activeListings = await getProfileListings(profile.name);
  if (activeListings) {
    const listingContainer = document.querySelector('#listingContainer');
    listTemplate(activeListings, listingContainer);
  } else {
    console.error('Failed to fetch active listings.');
  }
}

export async function handleProfilePageLoad() {
  const profile = load('profile');
  const { name } = profile;
  if (name) {
    getProfile(name).then((profileData) => {
      renderProfile(profileData);
    });
  } else {
    console.error('Failed to retrieve profile name from local storage.');
  }
}
