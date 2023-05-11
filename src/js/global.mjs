import { registerFormListener } from './api/handlers/register.mjs';
import { setLogin } from './api/handlers/login.mjs';
import { logoutFormListener } from './api/auth/logout.mjs';
import { createFormListener } from './api/handlers/createListing.mjs';
import { renderSingleListing } from './api/handlers/renderListing.mjs';
import * as templates from './templates/index.mjs';
import { bidFormListener } from './api/handlers/placeBid.mjs';
// import { setEditProfile } from './api/handlers/editProfile.mjs';
// import { postTemplate } from './templates/listings.mjs';
// import { fetchProfile } from './templates/profile.mjs';

const path = location.pathname;

switch (path) {
  case '/index.html':
    setLogin();
    registerFormListener();
    logoutFormListener();
    templates.renderListings();
    createFormListener();
    break;
  case '/profile/index.html':
    logoutFormListener();
    templates.renderListings();
    createFormListener();
    break;
  case '/listing/index.html':
    setLogin();
    registerFormListener();
    logoutFormListener();
    renderSingleListing();
    bidFormListener();
    createFormListener();
    break;
}
