import {getAuth} from '@react-native-firebase/auth';
import {API} from '../../api/api';

export const registerUser = async (phoneNumber: string): Promise<void> => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User not authenticated');
  }

  const token = await user.getIdToken();

  if (!token) {
    throw new Error('Unable to get auth token');
  }

  const response = await fetch(API.REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: user.displayName,
      email: user.email,
      phoneNumber,
    }),
  });

  if (!response.ok) {
    const msg = await response.text();
    throw new Error(msg || 'Registration failed');
  }
  return response.json();
};
