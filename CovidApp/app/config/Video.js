import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import Screen from "../components/Screen";

export default function Video() {
  return (
    <Screen>
      <YoutubePlayer
        ref={this.playerRef}
        height={300}
        width={400}
        videoId={"V8Ks9fUh2k8"}
        play={this.state.playing}
        onChangeState={(event) => console.log(event)}
        onReady={() => console.log("ready")}
        onError={(e) => console.log(e)}
        onPlaybackQualityChange={(q) => console.log(q)}
        volume={50}
        playbackRate={1}
        initialPlayerParams={{
          cc_lang_pref: "us",
          showClosedCaptions: true,
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
