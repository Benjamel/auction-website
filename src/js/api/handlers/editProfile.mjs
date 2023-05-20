import { editProfile } from '../profile/index.mjs';
import { load } from '../storage/index.mjs';

export async function editProfileFormListener(event) {
  const form = document.querySelector('#editProfile');

  if (form) {
    const { name, email } = load('profile');
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector('#editProfile button[type="submit"]');
    button.disabled = true;

    button.disabled = false;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);

      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      const avatarInput = document.querySelector('#editAvatar');
      const avatarUrl = avatarInput.value.trim();
      button.disabled = avatarUrl === '';
      editProfile(avatarUrl);
    });
  }
}
