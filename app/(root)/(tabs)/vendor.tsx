import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

// Example vendor data
const vendors = [
  {
    id: 1,
    storeImage: "data:image/jpeg;base64,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",
    name: "Vendor 1",
    description: "Description of Vendor 1",
    timings: "9 AM - 6 PM",
    availability: "Available",
    profileImage: "https://cdn-icons-png.flaticon.com/128/1995/1995450.png",
    detailedDescription: "Detailed description of Vendor 1 including services offered and other relevant information."
  },
  {
    id: 2,
    storeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjw6XLDOrLkGq2dNqYFvVqutjCNWY4Idlrg&s",
    name: "Vendor 2",
    description: "Description of Vendor 2",
    timings: "10 AM - 7 PM",
    availability: "Not Available",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__F3H5CtsocRVnCk1O915I4ttwDC3oBXMKw&s",
    detailedDescription: "Detailed description of Vendor 2 including services offered and other relevant information."
  },
  // Add more vendors as needed
];

const Vendor: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<number | null>(null);
  const router = useRouter();

  const handleBackPress = () => {
    if (selectedVendor !== null) {
      // If a vendor's details are open, close them
      setSelectedVendor(null);
    } else {
      // Otherwise, go back to the previous screen
      router.back();
    }
  };

  const handleDetailsPress = (id: number) => {
    // Toggle the detailed view for the selected vendor
    setSelectedVendor(selectedVendor === id ? null : id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9312/9312240.png' }} style={styles.backIcon} />
      </TouchableOpacity>

      {vendors.map((vendor) => (
        <View key={vendor.id} style={styles.vendorCard}>
          <Image source={{ uri: vendor.storeImage }} style={styles.storeImage} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{vendor.name}</Text>
            <Text style={styles.description}>{vendor.description}</Text>
            <Text style={styles.timings}>Timings: {vendor.timings}</Text>
            <Text style={styles.availability}>Availability: {vendor.availability}</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => handleDetailsPress(vendor.id)}
            >
              <Text style={styles.detailsButtonText}>
                {selectedVendor === vendor.id ? "Hide Details" : "View Details"}
              </Text>
            </TouchableOpacity>
          </View>

          {selectedVendor === vendor.id && (
            <View style={styles.detailedView}>
              <Image source={{ uri: vendor.profileImage }} style={styles.profileImage} />
              <View style={styles.detailedInfo}>
                <Text style={styles.detailedName}>{vendor.name}</Text>
                <Text style={styles.detailedDescription}>{vendor.detailedDescription}</Text>
              </View>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  backButton: {
    marginBottom: 20,
    marginTop: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  vendorCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  storeImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 12,
  },
  detailsContainer: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  timings: {
    fontSize: 14,
    color: '#777',
    marginBottom: 6,
  },
  availability: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  detailedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  detailedInfo: {
    flex: 1,
  },
  detailedName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailedDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default Vendor;
