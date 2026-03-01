import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {getMyIssues} from './utils';
import styles from './style';

const MyIssues = () => {
  const route = useRoute<any>();
  const {user} = route.params || {};

  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const data = await getMyIssues();
        setIssues(data);
      } catch (error: any) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  const renderItem = ({item}: any) => (
    <View style={styles.card}>
      <Text style={styles.category}>{item.category}</Text>

      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={styles.coords}>
          📍 {item.latitude?.toFixed(4)}, {item.longitude?.toFixed(4)}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        My Reports
      </Text>

      {issues.length === 0 ? (
        <Text style={styles.emptyText}>
          You haven’t reported any issues yet.
        </Text>
      ) : (
        <FlatList
          data={issues}
          keyExtractor={item => item.issueId}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 20}}
        />
      )}
    </View>
  );
};

export default MyIssues;
