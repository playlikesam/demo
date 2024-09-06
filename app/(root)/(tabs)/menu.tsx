import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons'; // Import Entypo icon set for cross icon

const Menu: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/services')} style={styles.menuItem}>
        <Text style={styles.menuText}>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/about')} style={styles.menuItem}>
        <Text style={styles.menuText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/contact')} style={styles.menuItem}>
        <Text style={styles.menuText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/cart')} style={styles.menuItem}>
        <Text style={styles.menuText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/vendor')} style={styles.menuItem}>
        <Text style={styles.menuText}>Vendor</Text>
      </TouchableOpacity>

      {/* Close Button */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 20, // Add right padding for close button alignment
  },
  menuItem: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menuText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingVertical: 10,
  },
  closeButton: {
    position: 'absolute',
    bottom: 30, // Adjusted value to move the button further down
    right: 20,
    zIndex: 1000,
  },
});

export default Menu;
