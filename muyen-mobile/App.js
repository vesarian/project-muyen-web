// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";

import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return (
      <HomeScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.primary,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })
