import { registerFormListener } from './api/handlers/register.mjs';
import { loginFormListener } from './api/auth/login.mjs';

const path = location.pathname;

if (path === '/' || path === '/index.html' || '/listing/index.html' || '/profile/index.html') {
  loginFormListener();
} else if (
  path === '/' ||
  path === '/index.html' ||
  '/listing/index.html' ||
  '/profile/index.html'
) {
  registerFormListener();
}
