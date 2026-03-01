import {API} from '../../api/api';
import {getAuth} from '@react-native-firebase/auth';

/* ---------- TYPES ---------- */
type AddIssuePayload = {
  description: string;
  category: 'EB' | 'CORPORATION';
  latitude: number;
  longitude: number;
  imageUrl1?: string; // optional for now
};

/* ---------- ADD ISSUE API ---------- */
export const addIssue = async (payload: AddIssuePayload) => {
  const auth = getAuth();
  const token = await auth.currentUser?.getIdToken();

  if (!token) {
    throw new Error('USER_NOT_AUTHENTICATED');
  }

  const response = await fetch(API.ADDISSUE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'FAILED_TO_ADD_ISSUE');
  }

  return await response.text(); // "Issue reported successfully"
};
