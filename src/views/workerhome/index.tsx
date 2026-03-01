import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getAuth} from '@react-native-firebase/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/types';
import styles from './style';

type WorkerHomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'WorkerHome'
>;

type IssueType = {
  issueId: string;
  category: string;
  subdivision: string;
  imageUrl?: string;
};

const WorkerDashboard = () => {
  const navigation = useNavigation<WorkerHomeNavigationProp>();
  const route = useRoute<any>();
  const {worker} = route.params;

  const [assignments, setAssignments] = useState<IssueType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const auth = getAuth();

        const token = await auth.currentUser?.getIdToken();


      const response = await fetch(
        'http://10.245.70.114:8080/api/worker/assignments',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      
console.log("Status:", response.status);
      if (!response.ok) {
        throw new Error('FAILED_TO_FETCH_ASSIGNMENTS');
      }

      const data = response.json();

      setAssignments(data);
    } catch (error: any) {
      console.error('Assignment Fetch Error:', error);
      Alert.alert('Error', error.message || 'Failed to load assignments');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {worker?.name}</Text>

      <FlatList
        data={assignments}
        keyExtractor={item => item.issueId?.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No assignments available</Text>
        }
        renderItem={({item}) => (
          <View style={styles.card}>
            {item.imageUrl ? (
              <Image source={{uri: item.imageUrl}} style={styles.image} />
            ) : null}

            <Text style={styles.category}>{item.category}</Text>

            <Text style={styles.text}>📍 {item.subdivision}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('WorkerComplete', {
                  issue: item,
                })
              }>
              <Text style={styles.buttonText}>Mark as Completed</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default WorkerDashboard;
