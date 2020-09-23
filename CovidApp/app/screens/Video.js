import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        width="100%"
        play={playing}
        playList={["V8Ks9fUh2k8", "ZqZLMoLvhgk"]}
        volume={100}
        onChangeState={onStateChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
