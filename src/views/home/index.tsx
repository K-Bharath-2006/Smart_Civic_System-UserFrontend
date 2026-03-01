import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { useNavigation, useRoute ,CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './style';
import { RootStackParamList } from '../../router/types';
import {getAuth} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';


type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const route = useRoute<any>();

  const { user } = route.params || {};
  const username = user?.name || 'Citizen';

  const [menuVisible, setMenuVisible] = useState(false);

  const goToAddIssue = () => {
    navigation.navigate('AddIssue', { user });
  };

  const goToProfile = () => {
    setMenuVisible(false);
    navigation.navigate('Profile', { user });
  };

  const goToMyReports = () => {
    setMenuVisible(false);
    navigation.navigate('MyIssues', { user });
  };

  const logout = async () => {
  try {
    // 🔐 Firebase logout
    const auth = getAuth();
    await auth.signOut();

    // 🔑 Google logout (IMPORTANT)
    await GoogleSignin.signOut();

    // 🔁 Reset navigation stack
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
  } catch (error: any) {
    Alert.alert('Logout Error', error.message);
  }
};


  return (
    <View style={styles.container}>
      {/* ===== Header ===== */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome, {username}</Text>

        {/* Three-dot Menu */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuVisible(true)}
        >
          <Text style={styles.menuIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* ===== Sub Title ===== */}
      <Text style={styles.title}>Let’s improve our city together</Text>

      {/* ===== Info Card ===== */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Why report issues?</Text>
        <Text style={styles.cardText}>
          • Capture real civic problems using live camera{'\n'}
          • Automatically tag location using GPS{'\n'}
          • Help authorities respond faster{'\n'}
          • Build a safer & smarter city
        </Text>
      </View>

      {/* ===== Action Button ===== */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={goToAddIssue}
      >
        <Text style={styles.primaryButtonText}>
          📸 Report a New Issue
        </Text>
      </TouchableOpacity>

      {/* ===== Footer ===== */}
      <Text style={styles.footerText}>
        Your voice matters. Every report creates impact.
      </Text>

      {/* ===== Menu Modal ===== */}
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={goToProfile}
            >
              <Text style={styles.menuText}>👤 Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={goToMyReports}
            >
              <Text style={styles.menuText}>📋 My Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={logout}
            >
              <Text style={[styles.menuText, { color: 'red' }]}>
                🚪 Logout
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Home;
