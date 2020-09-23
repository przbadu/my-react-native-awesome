import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import onboardingData from "../data/onboardingData";

export default function Onboarding({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = onboardingData[currentIndex];

  const loadNextScreen = () => {
    data.lastScreen
      ? navigation.navigate("Home")
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: data.background }]}>
      <Text style={styles.heading}>{data.heading}</Text>
      <Text style={styles.text}>{data.text}</Text>

      <Image style={styles.image} source={data.image} />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: data.buttonColor }]}
        onPress={loadNextScreen}
      >
        <Text style={{ textAlign: "center" }}>
          {data.last ? "CONTINUE" : "NEXT"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    marginTop: 50,
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "black",
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 50,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "center",
  },
  button: {
    width: "60%",
    borderRadius: 15,
    padding: 20,
    marginTop: 50,
    marginBottom: 20,
  },
});
