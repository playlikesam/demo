import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AirbnbRating } from 'react-native-ratings'; // For star ratings
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const vendorDetails = {
  '1': { 
    name: 'Vendor 1', 
    image: 'https://mechbuddy.in/wp-content/uploads/2023/05/blog-s-1-2-1-1.jpg',
    description: 'At Our Auto Services, we are committed to providing top-notch automotive repair and maintenance solutions for all types of vehicles. With years of experience and a highly skilled team of certified mechanics, we ensure your vehicle runs smoothly and efficiently.',
    rating: 4.3, 
    distance: '2.5 km', 
    offer: '70% OFF', 
    isActive: true // New field to mark as active
  },
  '2': { 
    name: 'Vendor 2', 
    image: 'https://mechbuddy.in/wp-content/uploads/2023/05/blog-s-1-2-1-1.jpg', 
    description: 'At Our Auto Services, we are committed to providing top-notch automotive repair and maintenance solutions for all types of vehicles. With years of experience and a highly skilled team of certified mechanics, we ensure your vehicle runs smoothly and efficiently.',
    rating: 4.7, 
    distance: '4.2 km', 
    offer: '50% OFF', 
    isActive: false // Inactive vendor
  },
  '3': { 
    name: 'Vendor 3', 
    image: 'https://mechbuddy.in/wp-content/uploads/2023/05/blog-s-1-2-1-1.jpg', 
    description: 'At Our Auto Services, we are committed to providing top-notch automotive repair and maintenance solutions for all types of vehicles. With years of experience and a highly skilled team of certified mechanics, we ensure your vehicle runs smoothly and efficiently.',
    rating: 3.9, 
    distance: '1.8 km', 
    offer: '30% OFF', 
    isActive: true
  },
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
      
      {/* Vendor image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: vendor.image }} style={styles.image} />
        
        {/* Display offer */}
        {vendor.offer && (
          <View style={styles.offerContainer}>
            <Icon name="pricetag" size={20} color="#fff" />
            <Text style={styles.offerText}>{vendor.offer}</Text>
          </View>
        )}

        {/* Vendor active status with green tick */}
        {vendor.isActive && (
          <View style={styles.activeStatus}>
            <Icon name="checkmark-circle" size={24} color="green" />
          </View>
        )}
      </View>

      {/* Vendor name and rating */}
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{vendor.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{vendor.rating}</Text>
          <AirbnbRating 
            defaultRating={vendor.rating}
            isDisabled
            showRating={false}
            size={20}
            starContainerStyle={styles.starContainer}
          />
        </View>
      </View>

      {/* Display distance */}
      <View style={styles.infoRow}>
        <Icon name="bicycle" size={20} color="#000" />
        <Text style={styles.infoText}>{vendor.distance} away</Text>
      </View>

      {/* Vendor description */}
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
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  offerContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff6347',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: '600',
  },
  activeStatus: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 5,
  },
  starContainer: {
    marginLeft: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default VendorDetail;