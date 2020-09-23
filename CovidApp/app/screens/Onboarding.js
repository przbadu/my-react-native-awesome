import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import onboardingData from "../config/onboardingData";

export default function Onboarding({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = onboardingData[currentIndex];

  const loadNextScreen = () => {
    data.lastScreen
      ? navigation.navigate("Video")
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: data.background }]}>
      <Text style={styles.text}>{data.text}</Text>

      <Image style={styles.image} source={data.image} />
      <TouchableHighlight
        style={[styles.button, { backgroundColor: data.buttonColor }]}
        onPress={loadNextScreen}
      >
        <Text style={{ textAlign: "center" }}>
          {data.last ? "CONTINUE" : "NEXT"}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    marginTop: 50,
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "black",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "center",
  },
  button: {
    width: "60%",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
});
