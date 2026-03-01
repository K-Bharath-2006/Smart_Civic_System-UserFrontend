import {getAuth} from '@react-native-firebase/auth';
import {API} from '../../api/api';

export const loginUser = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User not authenticated');
  }

  const token = await user.getIdToken();

  if (!token) {
    throw new Error('Unable to get auth token');
  }

  const response = await fetch(API.LOGIN, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 404) {
    throw {code: 'USER_NOT_REGISTERED'};
  }

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json(); // user object from backend
};
