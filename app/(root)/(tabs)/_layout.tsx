import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, StyleSheet } from "react-native";

import { icons } from "@/constants";

// TabIcon Component with custom styles
const TabIcon = ({
  source,
  focused,
  customStyle,
}: {
  source: ImageSourcePropType;
  focused: boolean;
  customStyle: object;
}) => (
  <View
    style={[
      styles.iconWrapper, // common styles for all icons
      focused ? styles.focusedBackground : null, // conditionally apply focused style
      customStyle, // apply custom style per icon
    ]}
  >
    <View style={[styles.icon, focused ? styles.focusedIcon : null]}>
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        style={styles.iconImage}
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0,
          overflow: "hidden",
          marginHorizontal: 50,
          marginBottom: 20,
          height: 78,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          paddingLeft: 20,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={icons.home}
              focused={focused}
              customStyle={styles.homeIconStyle} // Custom style for Home
            />
          ),
        }}
      />
      
      {/* Chat Tab */}
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={icons.chat}
              focused={focused}
              customStyle={styles.chatIconStyle} // Custom style for Chat
            />
          ),
        }}
      />
      
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={icons.profile}
              focused={focused}
              customStyle={styles.profileIconStyle} // Custom style for Profile
            />
          ),
        }}
      />
    </Tabs>
  );
}

// Styles
const styles = StyleSheet.create({
  iconWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 10,
  },
  icon: {
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  focusedIcon: {
    backgroundColor: "#ff3131", // Common focused icon background
  },

  // Custom styles for individual icons
  homeIconStyle: {
  // Custom color for Home icon
    left:20,
  },
  chatIconStyle: {
  // Custom color for Chat icon
    left:100,
  },
  profileIconStyle: {
  // Custom color for Profile icon
    left:180,
  },
});
