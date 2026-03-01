import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const EntranceScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#020617" barStyle="light-content" />

      <Text style={styles.title}>Welcome to Smart Civic System</Text>
      <Text style={styles.subtitle}>
        Report, Track & Solve Civic Issues Easily
      </Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Registeration')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EntranceScreen;
