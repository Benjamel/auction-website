import { loginFormListener } from '../auth/login.mjs';

export function setLogin() {
  const form = document.querySelector('#loginForm');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      loginFormListener(profile);
    });
  }
}
