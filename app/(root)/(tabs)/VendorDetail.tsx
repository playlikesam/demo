import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const vendorDetails = {
  '1': { name: 'Vendor 1', image: 'https://via.placeholder.com/400', description: 'Detailed description for Vendor 1' },
  '2': { name: 'Vendor 2', image: 'https://via.placeholder.com/400', description: 'Detailed description for Vendor 2' },
  '3': { name: 'Vendor 3', image: 'https://via.placeholder.com/400', description: 'Detailed description for Vendor 3' },
  // Add more details as needed
};

const VendorDetail: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { vendorId } = route.params as { vendorId: string };
  const vendor = vendorDetails[vendorId];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      <Image source={{ uri: vendor.image }} style={styles.image} />
      <Text style={styles.name}>{vendor.name}</Text>
      <Text style={styles.description}>{vendor.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default VendorDetail;