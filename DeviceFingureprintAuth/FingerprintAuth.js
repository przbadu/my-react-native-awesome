import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default function FingerprintAuth({ onPress }) {
  return (
    <View style={styles.container}>
      <Button title="Tap to login with fingerprint" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
