import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, ScrollView, Animated, TextComponent } from "react-native";
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
import AdvertisementStrip from "./advertisementStrip";
import Bell from "./subscription";
import Subscription from "./subscription";
import Referrals from "./referrals";
import VendorList from './VendorList';
import VendorDetail from './VendorDetail';

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
        toValue: 250,
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
      

      {/* Logo at the top left */}
      <View style={{ flexDirection: "row", justifyContent: "flex-start", padding: 0 }}>
        <View
      style={{
        padding: 10, // Add padding around the image
        alignItems: 'center', // Center the image horizontally
        justifyContent: 'center', // Center the image vertically
      }}
    >
      <Image
        source={require("@/assets/icons/logo.png")}
        style={{
          width: 50,
          height: 50,
          resizeMode: 'contain', // Ensure the logo maintains its aspect ratio
        }}
      />
    </View>

        {/* Advertisement Strip */}
        <AdvertisementStrip />

        {/* Bell Icon */}
        <TouchableOpacity onPress={() => router.push("/notifications")} style={{ position: "absolute", top: 0, right: 65 }}>
          <Image  source={icons.bell} style={{ width: 49, height: 49, tintColor: "#FF3131", position: "absolute", top: 10, right: 10 }} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={toggleMenu}
          style={{
            backgroundColor: "#FF3131",
            padding: 12,
            borderRadius: 50,
            position: "absolute",
            right: 20,
            top:10,
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
            left: 150,
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
              top: 35,
              right: 20,
              backgroundColor: "#FF3131",
              padding: 13,
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

            {/* <GoogleTextInput
              icon={icons.search}
              containerStyle={{ backgroundColor: "#FFF", shadowColor: "#D3D3D3", elevation: 3 }}
              handlePress={handleDestinationPress}
            /> */}

            {/* Carousel Section */}
            <View style={{right:15}}>
              <Carousel />
            </View>

            {/* Map Section */}
            {/* <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10 }}>
              Your current location
            </Text>
            <View style={{ height: 300, backgroundColor: "transparent" }}>
              <Map />
            </View> */}

            {/* Services Section */}
<View>
  <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10 }}>Our Services</Text>

  {/* Main Services - 3x3 Grid */}
  <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
    {[{ name: "Oil Change", icon: icons.s1 },
      { name: "Brake Repair", icon: icons.s2 },
      { name: "Tire Replacement", icon: icons.s3 },
      { name: "Battery Check", icon: icons.s4 },
      { name: "Engine Diagnosis", icon: icons.s5 },
      { name: "Wheel Alignment", icon: icons.s6 },
      { name: "Suspension Repair", icon: icons.s7 },
      { name: "Air Conditioning", icon: icons.s8 },
      { name: "Transmission Repair", icon: icons.s9 }
    ].map((service, index) => (
      <TouchableOpacity
        key={index}
        onPress={navigateToServices}
        style={{
          width: "30%", // Adjusted width to fit 3 items per row
          padding: 10,
          marginBottom: 16,
          backgroundColor: "#FFF",
          borderRadius: 8,
          shadowColor: "#D3D3D3",
          elevation: 2,
          alignItems: "center",
        }}
      >
        <Image source={service.icon} style={{ width: 36, height: 36, marginBottom: 6 }} />
        <Text style={{ fontSize: 12, color: "#888", textAlign: "center" }}>
          {service.name}
        </Text>
      </TouchableOpacity>
    ))}
  </View>

  {/* Divider Line */}
  <View style={{
    height: 1,
    backgroundColor: "#D3D3D3",
    marginVertical: 20
  }} />

  {/* Modification Services Subsection */}
  <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 10 }}>Modification Services</Text>
  <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
    {[{ name: "Custom Exhaust", icon: icons.s10 },
      { name: "Body Kits", icon: icons.s11 },
      { name: "Performance Tuning", icon: icons.s12 },
      { name: "Spoilers", icon: icons.s13 },
    ].map((service, index) => (
      <TouchableOpacity
        key={index}
        onPress={navigateToServices}
        style={{
          width: "30%", // Adjusted width for the sub-section too
          padding: 10,
          marginBottom: 16,
          backgroundColor: "#FFF",
          borderRadius: 8,
          shadowColor: "#D3D3D3",
          elevation: 2,
          alignItems: "center",
        }}
      >
        <Image source={service.icon} style={{ width: 36, height: 36, marginBottom: 6 }} />
        <Text style={{ fontSize: 12, color: "#888", textAlign: "center" }}>
          {service.name}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
</View>


            {/* Subscription card */}
            <View>
              <Subscription/>
            </View>
<ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}>
  
        {/* Product Section */}
        <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 16 }}>
          Accessories & Products
        </Text>
        <View style={{ flexDirection: "column" }}>
          {/* First Product */}
          <TouchableOpacity onPress={handleAddToCart}>
            <View style={{ flexDirection: "row", padding: 16, marginBottom: 16, backgroundColor: "#f9f9f9", borderRadius: 8, elevation:2 }}>
              <Image source={images.engine_oil} style={{ width: 80, height: 80 }} />
              <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontSize: 16 }}>Engine Oils</Text>
              <Text style={{ fontSize: 12, color: "#888", marginTop: 4 }}>Vj0v5UqBQWY2ABJPIDMmSYJCEG8LMxLsOROinqFCqeoM6vCdGtRbma7MfXuRW1NvJHC6smC2AVRZRoP69T14yMmZ1HmFNLz2Zyi</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* Second Product */}
          <TouchableOpacity onPress={handleAddToCart}>
            <View style={{ flexDirection: "row", padding: 16, marginBottom: 16, backgroundColor: "#f9f9f9", borderRadius: 8, elevation:2 }}>
              <Image source={images.battery} style={{ width: 80, height: 80 }} />
              <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontSize: 16 }}>Car Battery</Text>
              <Text style={{ fontSize: 12, color: "#888", marginTop: 4 }}>Vj0v5UqBQWY2ABJPIDMmSYJCEG8LMxLsOROinqFCqeoM6vCdGtRbma7MfXuRW1NvJHC6smC2AVRZRoP69T14yMmZ1HmFNLz2Zyi</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* top rated vendors */}
        <View>
          <VendorList/>
        </View>

        {/* Referrals */}
        <View>
          <Referrals/>
        </View>
      </ScrollView>
          </>
        }
      />
    </SafeAreaView>
  );
};
export default Home;