import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>Kalkulator</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1d1d1d"
  },
  headline: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    width: 200,
    color: "#fcba03"
  },
  textContainer: {
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 50,
    alignItems: "center",
    padding: 15,
    marginLeft: 20,
    marginRight: 20
  }
});

export default SplashScreen;
