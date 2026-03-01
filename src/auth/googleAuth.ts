import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from '@react-native-firebase/auth';

export const googleSignIn = async () => {
  await GoogleSignin.hasPlayServices({
    showPlayServicesUpdateDialog: true,
  });

  await GoogleSignin.signOut();

  const response = await GoogleSignin.signIn();

  if (response.type !== 'success') {
    throw new Error('Google Sign-In cancelled');
  }

  const {idToken} = response.data;

  if (!idToken) {
    throw new Error('Google ID token missing');
  }

  const authInstance = getAuth();
  const credential = GoogleAuthProvider.credential(idToken);

  const result = await signInWithCredential(authInstance, credential);

  return result.user;
};
