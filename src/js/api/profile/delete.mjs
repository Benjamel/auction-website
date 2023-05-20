import { API_URL } from '../constants.mjs';
import { headers } from '../headers.mjs';

const method = 'delete';
const action = '/auction/profiles/';

export async function deleteProfile(name) {
  const response = await fetch(`${API_URL + action + name}`, {
    method,
    headers: headers(),
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
}
