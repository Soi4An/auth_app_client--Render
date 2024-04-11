import { SERVER_DOMAIN } from '../config';
import { User } from '../types/User';
import { authClient } from './axios';

export const googleGetUser = () => {
  return authClient.get<{ user: User }>('/auth/google/success');
};

export const googleLogout = () => {
  return authClient.post('/auth/google/logout', {}, { withCredentials: false });
};

// maybe, need to place in components
export const googleAuth = () => {
  window.open(`${SERVER_DOMAIN}/auth/google/callback`, '_self');
};
