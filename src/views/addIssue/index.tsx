import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import styles from './style';
import { addIssue } from './utils';
import {useNavigation , useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/types';

type AddIssueNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddIssue'
>;


enum IssueCategory {
  EB = 'EB',
  CORPORATION = 'CORPORATION',
}

type LocationType = {
  latitude: number;
  longitude: number;
};

type ImageType = {
  uri: string;
};
const AddIssue = () => {
  const [image, setImage] = useState<ImageType | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<IssueCategory | null>(null);
  const [location, setLocation] = useState<LocationType | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(true);

    const navigation = useNavigation<AddIssueNavProp>();
const route = useRoute<any>();

const {user} = route.params;
  
  /* ---------- CAMERA STATE ---------- */
  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.find(d => d.position === 'back');
  const [showCamera, setShowCamera] = useState(false);

  /* ---------- LOCATION PERMISSION ---------- */
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        Alert.alert('Permission denied', 'Location permission required');
        setLoadingLocation(false);
        return;
      }

      Geolocation.getCurrentPosition(
        pos => {
          setLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          setLoadingLocation(false);
        },
        err => {
          setLoadingLocation(false);
          Alert.alert('Location Error', err.message);
        },
        {
          enableHighAccuracy: false,
          timeout: 15000,
          maximumAge: 0,
        },
      );
    };

    fetchLocation();
  }, []);

  /* ---------- OPEN CAMERA ---------- */
  const openCamera = async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission !== 'granted') {
      Alert.alert('Permission denied', 'Camera permission required');
      return;
    }
    setShowCamera(true);
  };

  /* ---------- TAKE PHOTO ---------- */
  const takePhoto = async () => {
    try {
      const photo = await cameraRef.current?.takePhoto({
        flash: 'off',
      });

      if (photo?.path) {
        setImage({uri: 'file://' + photo.path});
        setShowCamera(false);
      }
    } catch (e) {
      Alert.alert('Camera Error', 'Failed to capture photo');
    }
  };

  /* ---------- SUBMIT ISSUE ---------- */
const submitIssue = async () => {
  if (!location || !image || !description || !category) {
    Alert.alert('Error', 'All fields are required');
    return;
  }

  try {
    await addIssue({
      description,
      category,
      latitude: location.latitude,
      longitude: location.longitude,
      imageUrl1: image.uri,
    });

   Alert.alert('Success', 'Issue reported successfully', [
        {
          text: 'OK',
          onPress: () => navigation.replace('Home', {user}),
        },
      ]);
    
  } catch (error: any) {
    Alert.alert('Error', error.message);
  }
};

  /* ---------- CAMERA SCREEN ---------- */
  if (showCamera && device) {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <Camera
          ref={cameraRef}
          style={{flex: 1}}
          device={device}
          isActive={true}
          photo
        />

        <TouchableOpacity
          onPress={takePhoto}
          style={{
            position: 'absolute',
            bottom: 40,
            alignSelf: 'center',
            backgroundColor: '#fff',
            padding: 18,
            borderRadius: 50,
          }}>
          <Text style={{color: '#000'}}>Capture</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowCamera(false)}
          style={{
            position: 'absolute',
            top: 40,
            left: 20,
          }}>
          <Text style={{color: '#fff'}}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  /* ---------- MAIN UI ---------- */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report an Issue</Text>

      <Text style={styles.locationText}>
        {loadingLocation
          ? 'Fetching location...'
          : location
          ? '📍 Location locked'
          : 'Location unavailable'}
      </Text>

      <TouchableOpacity style={styles.imageBox} onPress={openCamera}>
        {image ? (
          <Image source={{uri: image.uri}} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>Open Camera</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Describe the issue..."
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            category === IssueCategory.EB && styles.activeCategory,
          ]}
          onPress={() => setCategory(IssueCategory.EB)}>
          <Text style={styles.categoryText}>EB</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.categoryButton,
            category === IssueCategory.CORPORATION &&
              styles.activeCategory,
          ]}
          onPress={() => setCategory(IssueCategory.CORPORATION)}>
          <Text style={styles.categoryText}>Corporation</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={submitIssue}>
        <Text style={styles.submitText}>Submit Issue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddIssue;
