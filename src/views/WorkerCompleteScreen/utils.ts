import { API } from '../../api/api';
import { getAuth } from '@react-native-firebase/auth';

/* ---------- TYPES ---------- */
type CompleteWorkPayload = {
  issueId: string;
  completionImageUrl: string;
};

/* ---------- COMPLETE WORK API ---------- */
export const completeWork = async (payload: CompleteWorkPayload) => {
  const auth = getAuth();
  const token = await auth.currentUser?.getIdToken();

  if (!token) {
    throw new Error('USER_NOT_AUTHENTICATED');
  }

  const response = await fetch(API.COMPLETE_WORK, {
    method: 'POST', // or PUT (depends on backend)
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      issueId: payload.issueId,
      completionImageUrl: payload.completionImageUrl,
      status: 'COMPLETED',
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'FAILED_TO_COMPLETE_WORK');
  }

  return await response.text(); 
};
