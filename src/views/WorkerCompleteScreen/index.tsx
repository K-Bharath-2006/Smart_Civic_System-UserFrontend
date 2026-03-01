import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../router/types';
import styles from './style';

type NavProp = NativeStackNavigationProp<
  RootStackParamList,
  'WorkerComplete'
>;

type ImageType = {
  uri: string;
};

const WorkerCompleteScreen = () => {
  const navigation = useNavigation<NavProp>();
  const route = useRoute<any>();

  const { issue } = route.params;

  const [image, setImage] = useState<ImageType | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.find(d => d.position === 'back');

  const openCamera = async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission !== 'granted') {
      Alert.alert('Camera permission required');
      return;
    }
    setShowCamera(true);
  };

  const takePhoto = async () => {
    try {
      const photo = await cameraRef.current?.takePhoto({
        flash: 'off',
      });

      if (photo?.path) {
        setImage({ uri: 'file://' + photo.path });
        setShowCamera(false);
      }
    } catch (e) {
      Alert.alert('Camera Error');
    }
  };

  const submitCompletion = async () => {
    if (!image) {
      Alert.alert('Please capture completion photo');
      return;
    }

    try {
      // 🔥 Here call your backend API
      console.log("Update issue ID:", issue.id);
      console.log("Completion Image:", image.uri);

      Alert.alert('Success', 'Work marked as completed', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  if (showCamera && device) {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <Camera
          ref={cameraRef}
          style={{ flex: 1 }}
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
          <Text>Capture</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Work</Text>

      <Text>Issue ID: {issue.id}</Text>
      <Text>Location: {issue.location}</Text>
      <Text>Category: {issue.category}</Text>

      <TouchableOpacity style={styles.imageBox} onPress={openCamera}>
        {image ? (
          <Image source={{ uri: image.uri }} style={styles.image} />
        ) : (
          <Text>Capture Completion Photo</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitCompletion}>
        <Text style={styles.submitText}>Mark as Completed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkerCompleteScreen;
