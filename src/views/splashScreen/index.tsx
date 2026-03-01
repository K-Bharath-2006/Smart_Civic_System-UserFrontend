import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Entrance');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#020617" barStyle="light-content" />
      <Text style={styles.logo}>Smart Civics System</Text>
      <Text style={styles.tagline}>Smart Civic Issue Reporting</Text>
    </View>
  );
};

export default SplashScreen;
