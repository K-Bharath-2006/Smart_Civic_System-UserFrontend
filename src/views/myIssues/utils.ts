import {API} from '../../api/api';
import {getAuth} from '@react-native-firebase/auth';

export const getMyIssues = async () => {
  const auth = getAuth();
  const token = await auth.currentUser?.getIdToken();

  if (!token) {
    throw new Error('USER_NOT_AUTHENTICATED');
  }

  const response = await fetch(API.GET_MY_ISSUES, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const msg = await response.text();
    throw new Error(msg || 'FAILED_TO_FETCH_ISSUES');
  }

  return await response.json();
};
