import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '613041722407-sr9gnjifaul3ksnl20g38glbfvspvn45.apps.googleusercontent.com',
  });
};
