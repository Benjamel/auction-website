import { load } from '../storage/index.mjs';

export function handleVisibility() {
  const isLoggedIn = load('profile') !== null;
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const viewProfileLink = document.getElementById('profileBtn');
  const createListingBtn = document.querySelector('[data-bs-target="#create-listing"]');
  const editProfileBtn = document.querySelector('[data-bs-target="#edit-profile"]');
  const hr = document.querySelector('hr');

  if (isLoggedIn) {
    loginBtn.classList.add('d-none');
    logoutBtn.parentElement.style.display = 'block';
    viewProfileLink.parentElement.style.display = 'block';
    createListingBtn.parentElement.style.display = 'block';
    editProfileBtn.parentElement.style.display = 'block';
  } else {
    loginBtn.classList.remove('d-none');
    logoutBtn.parentElement.style.display = 'none';
    viewProfileLink.parentElement.style.display = 'none';
    createListingBtn.parentElement.style.display = 'none';
    editProfileBtn.parentElement.style.display = 'none';
    hr.style.display = 'none';
  }
}
