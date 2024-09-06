import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, ScrollView, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

import GoogleTextInput from "@/components/GoogleTextInput";
import Map from "@/components/Map";
import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import { useFetch } from "@/lib/fetch";
import { useLocationStore } from "@/store";
import { Ride } from "@/types/type";

import Carousel from './Carousel';
import Menu from './menu';

const Home: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const { setUserLocation, setDestinationLocation } = useLocationStore();
  const [hasPermission, setHasPermission] = React.useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuAnimation] = useState(new Animated.Value(-250)); // Menu hidden initially
  const router = useRouter();

  const {
    data: recentRides,
    loading,
    error,
  } = useFetch<Ride[]>(`/(api)/ride/${user?.id}`);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermission(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      setUserLocation({
        latitude: location.coords?.latitude,
        longitude: location.coords?.longitude,
        address: `${address[0].name}, ${address[0].region}`,
      });
    })();
  }, []);
  
  const handleDestinationPress = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    setDestinationLocation(location);
    router.push("/find-ride");
  };

  const handleSignOut = () => {
    signOut();
    router.replace("/sign-in");
  };

  const navigateToServices = () => {
    router.push("/services");
  };

  const handleAddToCart = () => {
    router.push('/cart'); // Redirect to Cart page
  };

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(menuAnimation, {
        toValue: -250,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(menuAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
      {/* Button to Toggle Menu */}
      <View style={{ flexDirection: "row", justifyContent: "flex-start", padding: 20 }}>
        <TouchableOpacity
          onPress={toggleMenu}
          style={{
            backgroundColor: "#FF6347",
            padding: 10,
            borderRadius: 50,
          }}
        >
          <Image source={icons.menu} style={{ width: 24, height: 24, tintColor: "#FFF" }} />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 250,
            height: "100%",
            backgroundColor: "#FFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            transform: [{ translateX: menuAnimation }],
            zIndex: 1000,
          }}
        >
          <Menu />
          <TouchableOpacity
            onPress={toggleMenu}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              backgroundColor: "#FF6347",
              padding: 10,
              borderRadius: 50,
            }}
          >
            <Image source={icons.close} style={{ width: 24, height: 24, tintColor: "#FFF" }} />
          </TouchableOpacity>
        </Animated.View>
      )}

      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {!loading ? (
              <>
                <Image source={images.noResult} style={{ width: 160, height: 160 }} resizeMode="contain" />
                <Text style={{ fontSize: 14 }}>No recent Mechanics found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={
          <>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>Welcome {user?.firstName}👋</Text>
              <TouchableOpacity
                onPress={handleSignOut}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#FFF",
                }}
              >
                <Image source={icons.out} style={{ width: 16, height: 16 }} />
              </TouchableOpacity>
            </View>

            <GoogleTextInput
              icon={icons.search}
              containerStyle={{ backgroundColor: "#FFF", shadowColor: "#D3D3D3", elevation: 3 }}
              handlePress={handleDestinationPress}
            />

            <Carousel>
              <View style={{ width: "100%", height: 200 }}>
                <Image source={images.onboarding1} style={{ width: "100%", height: "100%" }} />
              </View>
              <View style={{ width: "100%", height: 200 }}>
                <Image source={images.onboarding2} style={{ width: "100%", height: "100%" }} />
              </View>
              <View style={{ width: "100%", height: 200 }}>
                <Image source={images.onboarding3} style={{ width: "100%", height: "100%" }} />
              </View>
            </Carousel>

            {/* Map Section */}
            <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10 }}>
              Your current location
            </Text>
            <View style={{ height: 300, backgroundColor: "transparent" }}>
              <Map />
            </View>

            {/* Services Section */}
            <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10 }}>Our Services</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
              {[...Array(6)].map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={navigateToServices}
                  style={{
                    width: "48%",
                    padding: 16,
                    marginBottom: 16,
                    backgroundColor: "#FFF",
                    borderRadius: 8,
                    shadowColor: "#D3D3D3",
                    elevation: 3,
                    alignItems: "center",
                  }}
                >
                  <Image source={icons[`s${index + 1}`]} style={{ width: 48, height: 48, marginBottom: 8 }} />
                  <Text style={{ fontSize: 14, color: "#888", textAlign: "center" }}>
                    Description of Service {index + 1}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* List of Products Section */}
            <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10 }}>
              Accessory Parts
            </Text>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
              <View style={{ marginBottom: 20 }}>
                {/* Product Item 1 */}
                <View
                  style={{
                    flexDirection: "row",
                    padding: 16,
                    marginBottom: 16,
                    backgroundColor: "#FFF",
                    borderRadius: 8,
                    shadowColor: "#D3D3D3",
                    elevation: 3,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image source={images.tyres} style={{ width: 96, height: 96, marginRight: 16 }} resizeMode="cover" />
                  <View style={{ flex: 1 }}>
                    <Text id="1" style={{ fontSize: 16, fontWeight: "700" }}>Tyres</Text>
                    <Text style={{ fontSize: 14, color: "#888" }}>Best quality tyres for your car</Text>
                    <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 4 }}>₹5000</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FF6347",
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      borderRadius: 4,
                    }}onPress={handleAddToCart}
                  >
                    <Text style={{ color: "#FFF", fontWeight: "600" }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>

                {/* Product Item 2 */}
                <View
                  style={{
                    flexDirection: "row",
                    padding: 16,
                    marginBottom: 16,
                    backgroundColor: "#FFF",
                    borderRadius: 8,
                    shadowColor: "#D3D3D3",
                    elevation: 3,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image source={images.battery} style={{ width: 96, height: 96, marginRight: 16 }} resizeMode="cover" />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>Battery</Text>
                    <Text style={{ fontSize: 14, color: "#888" }}>Long-lasting batteries for your vehicle</Text>
                    <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 4 }}>₹3000</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FF6347",
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      borderRadius: 4,
                    }}onPress={handleAddToCart}
                  >
                    <Text style={{ color: "#FFF", fontWeight: "600" }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Add Vendor Section */}
              <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10 }}>
                Available Vendors
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/(root)/vendor")}
                style={{
                  backgroundColor: "#FF6347",
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFF", fontWeight: "600" }}>View Vendors</Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
