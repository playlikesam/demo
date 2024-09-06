import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for back button
import { icons, images } from "@/constants";

const Cart: React.FC = () => {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push("/payment"); // Navigate to Payment page
  };

  // Sample data for the cart items
  const cartItems = [
    {
      id: "1",
      name: "Tyres",
      description: "Best quality tyres for your car",
      price: "₹5000",
      image: images.tyres,
    },
    {
      id: "2",
      name: "Battery",
      description: "Long-lasting batteries for your vehicle",
      price: "₹3000",
      image: images.battery,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={30} color="#333" />
      </TouchableOpacity>

      <Text style={styles.heading}>Your Cart</Text>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <View
              key={item.id}
              style={styles.cartItem}
            >
              <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        )}

        {/* Buy Now Button */}
        <TouchableOpacity
          onPress={handleBuyNow}
          style={styles.buyNowButton}
        >
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    paddingTop: 60, // Added top padding to avoid collision with back button
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  scrollView: {
    paddingBottom: 100,
  },
  cartItem: {
    flexDirection: "row",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowColor: "#D3D3D3",
    elevation: 3,
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemImage: {
    width: 96,
    height: 96,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
  },
  itemDescription: {
    fontSize: 14,
    color: "#888",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
  emptyCartText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
  buyNowButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buyNowText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Cart;
