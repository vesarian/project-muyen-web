import React from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "../config/colors";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../assets/caramel-machia.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: '21%',
    opacity: 0.7,
  },
});
export default HomeScreen;
