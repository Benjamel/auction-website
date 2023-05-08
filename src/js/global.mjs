import { registerFormListener } from './api/handlers/register.mjs';
import { setLogin } from './api/handlers/login.mjs';
import { logoutFormListener } from './api/auth/logout.mjs';
import { createListFormListener } from './api/handlers/createListing.mjs';
import { setEditProfile } from './api/handlers/editProfile.mjs';
import { postTemplate } from './templates/listings.mjs';
// import { fetchProfile } from './templates/profile.mjs';
// import { createPostFormListener } from './api/handlers/createListing.mjs';

const path = location.pathname;

if (path === '/' || '/index.html' || '/listing/index.html' || '/profile/index.html') {
  setLogin();
  registerFormListener();
  logoutFormListener();
  createListFormListener();
  setEditProfile();
  postTemplate();
  // fetchProfile();
}
// else if (path === '/index.html' || '/listing/index.html' || '/profile/index.html') {
//   setEditProfile();
// } else if (path === '/profile/' || '/profile/index.html') {
//   fetchProfile();
// } else if (path === '/profile/' || '/profile/index.html') {
//   createPostFormListener();
// }

// import * as list from './api/auth/listings/index.mjs';
// list.createList({
//   title: 'Test',
//   endsAt: '2020-01-01T00:00:00.000Z',
// });
