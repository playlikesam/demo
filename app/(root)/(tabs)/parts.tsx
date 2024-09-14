import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back button
import { useRouter } from 'expo-router';
import { icons, images } from "@/constants";
import VendorList from './VendorList';

const Parts: React.FC = () => {
  const router = useRouter();

  const handleAddToCart = () => {
    // Navigate to cart.tsx
    router.push('/cart'); // Update the path according to your routing setup
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>

        {/* Product Section */}
        <Text style={styles.header}>Accessories & Products</Text>

        <View style={styles.productContainer}>
          {/* First Product */}
          <TouchableOpacity onPress={handleAddToCart}>
            <View style={styles.productBox}>
              <Image source={images.engine_oil} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>Engine Oils</Text>
                <Text style={styles.productDescription}>
                  Vj0v5UqBQWY2ABJPIDMmSYJCEG8LMxLsOROinqFCqeoM6vCdGtRbma7MfXuRW1NvJHC6smC2AVRZRoP69T14yMmZ1HmFNLz2Zyi
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Second Product */}
          <TouchableOpacity onPress={handleAddToCart}>
            <View style={styles.productBox}>
              <Image source={images.battery} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>Car Battery</Text>
                <Text style={styles.productDescription}>
                  Vj0v5UqBQWY2ABJPIDMmSYJCEG8LMxLsOROinqFCqeoM6vCdGtRbma7MfXuRW1NvJHC6smC2AVRZRoP69T14yMmZ1HmFNLz2Zyi
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <VendorList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 80,
  },
  content: {
    padding: 20,
    paddingTop: 80, // Added padding at the top to accommodate the back button
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  productContainer: {
    flexDirection: 'column',
  },
  productBox: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 16,
  },
  productDescription: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default Parts;