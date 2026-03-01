import React from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import styles from './style';
import {googleSignIn} from '../../auth/googleAuth';
import {loginUser} from './utils';
import {RootStackParamList} from '../../router/types';

type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const Login = () => {
  const navigation = useNavigation<LoginNavigationProp>();

 const handleLogin = async () => {
  try {
    await googleSignIn();

    const userData = await loginUser();

    if (userData.role === "WORKER") {
      navigation.replace("WorkerDashboard", {
        worker: userData.workerData
      });
    } else {
      navigation.replace("Home", {
        user: userData
      });
    }

  } catch (error: any) {
    if (error.code === 'USER_NOT_REGISTERED') {
      navigation.replace('Registration');
    } else {
      Alert.alert('Login Error', error.message || 'Login failed');
    }
  }
};


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in with your Google account</Text>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
