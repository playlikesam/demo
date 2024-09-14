import React, { useRef } from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { icons } from '@/constants'; // Importing icons from your project constants

const { width } = Dimensions.get('window');

// Assuming s1 to s9 icons are imported from 'icons'
const data = [
  { id: '1', icon: icons.s1, label: 'Service 1' },
  { id: '2', icon: icons.s2, label: 'Service 2' },
  { id: '3', icon: icons.s3, label: 'Service 3' },
  { id: '4', icon: icons.s4, label: 'Service 4' },
  { id: '5', icon: icons.s5, label: 'Service 5' },
  { id: '6', icon: icons.s6, label: 'Service 6' },
  { id: '7', icon: icons.s7, label: 'Service 7' },
  { id: '8', icon: icons.s8, label: 'Service 8' },
  { id: '9', icon: icons.s9, label: 'Service 9' },
];

const SliderReel = () => {
  const flatListRef = useRef<FlatList<any>>(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.label}>{item.label}</Text>
          </View>
        )}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false} // Allows manual smooth scrolling
      />
      <TouchableOpacity style={styles.exploreButton} onPress={() => console.log('Explore More Pressed')}>
        <Text style={styles.exploreButtonText}>Explore More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  card: {
    width: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0', // Light background for the card
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 20,
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  exploreButton: {
    backgroundColor: '#ff3131',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SliderReel;