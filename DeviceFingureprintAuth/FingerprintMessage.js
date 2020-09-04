import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FingerprintMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 20,
  },
});
