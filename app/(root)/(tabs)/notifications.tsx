import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const notificationsData = [
  { id: '1', title: 'New Service Launch', message: 'We have launched new services for your convenience!' },
  { id: '2', title: 'Premium Plan Available', message: 'Check out our new premium plan with added benefits!' },
  { id: '3', title: 'Discount Offer', message: 'Enjoy a 20% discount on all services this month!' },
  { id: '4', title: 'Service Reminder', message: 'Your scheduled service is coming up soon.' },
];

const NotificationItem = ({ title, message }: { title: string; message: string }) => (
  <View style={styles.notificationItem}>
    <Text style={styles.notificationTitle}>{title}</Text>
    <Text style={styles.notificationMessage}>{message}</Text>
  </View>
);

const Notifications: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem title={item.title} message={item.message} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#D3D3D3',
    elevation: 3,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#ff3131'
  },
  notificationMessage: {
    fontSize: 16,
    color: '#555',
  },
});

export default Notifications;