import { editProfile } from '../profile/index.mjs';
import * as storage from '../storage/index.mjs';

export function editProfileFormListener() {
  const editProfileForm = document.querySelector('#editProfile');
  editProfileForm.addEventListener('submit', handleEditProfileForm);
}

function handleEditProfileForm(event) {
  event.preventDefault();

  const avatarInput = document.querySelector('#editAvatar');
  const avatarUrl = avatarInput.value.trim();

  const profile = storage.load('profile');
  const { name, email } = profile;

  const emailInput = document.querySelector('#disabledEmail');
  const usernameInput = document.querySelector('#disabledUsername');
  emailInput.value = email;
  usernameInput.value = name;

  const submitButton = document.querySelector('#editProfile button[type="submit"]');
  submitButton.disabled = avatarUrl === '';

  editProfile(avatarUrl);
}

// export async function setEditProfile() {
//   const form = document.querySelector('#editProfile');

//   if (form) {
//     const { name, email } = load('profile');
//     form.name.value = name;
//     form.email.value = email;

//     const button = form.querySelector('button');
//     button.disabled = true;

//     const { avatar } = await getProfile(name);

//     form.avatar.value = avatar;

//     button.disabled = false;

//     form.addEventListener('submit', async (event) => {
//       event.preventDefault();
//       const form = event.target;
//       const formData = new FormData(form);

//       const profile = Object.fromEntries(formData.entries());

//       profile.name = name;
//       profile.email = email;

//       editProfile(profile);
//     });
//   }
// }
