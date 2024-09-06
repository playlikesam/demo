import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const Services: React.FC = () => {
  const navigation = useNavigation(); // Get navigation prop

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        {/* Heading */}
        <Text style={styles.heading}>Puncture Services</Text>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Vehicle Type:</Text>
          <TextInput style={styles.input} placeholder="Enter vehicle type" />

          <Text style={styles.label}>Location:</Text>
          <TextInput style={styles.input} placeholder="Enter your location" />

          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Describe the issue"
            multiline
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FF6347',
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  form: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#D3D3D3",
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF6347",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Services;
