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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Testing splash</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
