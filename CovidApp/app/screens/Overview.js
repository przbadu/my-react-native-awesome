import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";

export default function Overview() {
  return (
    <Screen>
      <Text style={styles.heading}>
        Here are some of the Notes taken from video.
      </Text>

      <View style={styles.box}>
        <Text>People who had a </Text>
        <Text style={styles.highlighted}>Vitamin D Deficit</Text>
        <Text> level measured in the year before </Text>
        <Text style={styles.strong}>COVID-19</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  box: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#d1d1d1",
    borderRadius: 5,
    flexWrap: "wrap",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    margin: 10,
  },
  text: {},
  highlighted: {
    color: "tomato",
  },
  green: {
    color: "green",
  },
  strong: {
    fontWeight: "900",
  },
});
