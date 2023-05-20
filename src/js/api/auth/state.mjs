import { load } from '../storage/index.mjs';

export const isLoggedIn = () => {
  const accessToken = load('accessToken');
  return Boolean(accessToken);
};
