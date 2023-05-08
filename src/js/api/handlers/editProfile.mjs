import { getProfile, editProfile } from '../profile/index.mjs';
import { load } from '../storage/index.mjs';

export async function setEditProfile() {
  const form = document.querySelector('#editProfile');

  if (form) {
    const { name, email } = load('profile');
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector('button');
    button.disabled = true;

    const { avatar } = await getProfile(name);

    form.avatar.value = avatar;

    button.disabled = false;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);

      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      editProfile(profile);
    });
  }
}
