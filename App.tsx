import React, {useEffect} from 'react';
import RouterApp from './src/router/';
import {NavigationContainer} from '@react-navigation/native';
import {configureGoogleSignIn} from './src/auth/googleConfig';
// import {getAuth} from '@react-native-firebase/auth';
// import {useNavigation} from '@react-navigation/native';


const App = () => {
  // const navigation = useNavigation<any>();
  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = getAuth().onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace('Home');
  //     } else {
  //       navigation.replace('Login');
  //     }
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <NavigationContainer>
      <RouterApp />
    </NavigationContainer>
  );
};

export default App;
