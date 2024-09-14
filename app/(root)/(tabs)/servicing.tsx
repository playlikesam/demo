import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for back button
import { useRouter } from 'expo-router';
import { icons, images } from "@/constants";
import VendorList from './VendorList';

const Servicing: React.FC = () => {
  const router = useRouter();

  // Updated services array
  const services = [
    { name: "Oil Change", icon: icons.s1 },
    { name: "Brake Repair", icon: icons.s2 },
    { name: "Tire Replacement", icon: icons.s3 },
    { name: "Battery Check", icon: icons.s4 },
    { name: "Engine Diagnosis", icon: icons.s5 },
    { name: "Wheel Alignment", icon: icons.s6 },
    { name: "Suspension Repair", icon: icons.s7 },
    { name: "Air Conditioning", icon: icons.s8 },
    { name: "Transmission Repair", icon: icons.s9 }
  ];

  const handleServicePress = (serviceName: string) => {
    // Navigate to the services.tsx page, passing the selected service name as a parameter
    router.push({
      pathname: '/services',
      params: { service: serviceName },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={30} color="#333" />
      </TouchableOpacity>

      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 30 }}>
          Select a Service
        </Text>
        <Text style={{ fontSize: 16, color: '#666', marginTop:20 }}>
          Choose a service to get started
        </Text> 
      </View>

      <View style={styles.gridContainer}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceBox}
            onPress={() => handleServicePress(service.name)} // Navigate to services.tsx with the clicked service name
          >
            <Image source={service.icon} style={styles.icon} />
            <Text style={styles.serviceText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
        {/* Render the VendorList component */}
      <VendorList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30, // Space for back button
  },
  serviceBox: {
    width: '30%',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});

export default Servicing;
