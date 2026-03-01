import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './style';
import {googleSignIn} from '../../auth/googleAuth';
import {registerUser} from './utils';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/types';

type RegisterNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Registration'
>;

const RegisterStudent = () => {
  const [user, setUser] = useState<any>(null);
  const [phone, setPhone] = useState('');
  const navigation = useNavigation<RegisterNavigationProp>();

  const handleGoogleSignIn = async () => {
    try {
      const firebaseUser = await googleSignIn();
      setUser(firebaseUser);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleRegister = async () => {
    if (!phone) {
      Alert.alert('Error', 'Phone number is required');
      return;
    }

    try {
      const userData = await registerUser(phone);

      Alert.alert('Success', 'Registered successfully');

      navigation.replace('Home', {user: userData});
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Register with Google</Text>

        {!user ? (
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleGoogleSignIn}>
            <Text style={styles.registerButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TextInput
              style={styles.input}
              value={user.displayName ?? ''}
              editable={false}
            />

            <TextInput
              style={styles.input}
              value={user.email ?? ''}
              editable={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default RegisterStudent;
