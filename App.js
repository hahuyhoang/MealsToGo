import { StatusBar } from "expo-status-bar";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { StyleSheet, Text, View } from "react-native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
