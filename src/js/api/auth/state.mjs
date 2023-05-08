import { load } from '../storage/index.mjs';

export const isLoggedIn = () => Boolean(load('accessToken'));

export const profile = () => load('profile');
