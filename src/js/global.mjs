import { registerFormListener } from './api/handlers/register.mjs';
import { setLogin } from './api/handlers/login.mjs';
import { logoutFormListener } from './api/auth/logout.mjs';
import { createFormListener } from './api/handlers/createListing.mjs';
import { renderSingleListing } from './api/handlers/renderListing.mjs';
import * as templates from './templates/index.mjs';
import { bidFormListener } from './api/handlers/placeBid.mjs';
import { editProfileFormListener } from './api/handlers/editProfile.mjs';
import { handleProfilePageLoad } from './templates/index.mjs';
import { handleVisibility } from './api/handlers/loggedIn.mjs';
import { searchForm } from './api/handlers/search.mjs';

const path = location.pathname;

switch (path) {
  case '/index.html':
    setLogin();
    registerFormListener();
    logoutFormListener();
    templates.renderListings();
    createFormListener();
    editProfileFormListener();
    handleVisibility();
    searchForm();
    break;
  case '/profile/index.html':
    logoutFormListener();
    createFormListener();
    editProfileFormListener();
    handleProfilePageLoad();
    handleVisibility();
    break;
  case '/listing/index.html':
    setLogin();
    registerFormListener();
    logoutFormListener();
    renderSingleListing();
    bidFormListener();
    createFormListener();
    editProfileFormListener();
    handleVisibility();
    break;
}
