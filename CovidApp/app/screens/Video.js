import React, { useState, useCallback } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Markdown from "react-native-markdown-display";

import overviewData from "../data/overviewData";

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
        height={250}
        width="100%"
        play={playing}
        playList={["V8Ks9fUh2k8", "ZqZLMoLvhgk"]}
        volume={100}
        onChangeState={onStateChange}
      />

      <Text style={styles.author}>Vitamin D, First clinical trial</Text>
      <Text style={[styles.author, { marginBottom: 20 }]}>
        Dr. John Campbell
      </Text>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ height: "100%", marginHorizontal: 20 }}
      >
        {overviewData.points.map((li, i) => (
          <Markdown key={i}>{li}</Markdown>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  author: {
    marginLeft: 20,
    color: "tomato",
  },
});
