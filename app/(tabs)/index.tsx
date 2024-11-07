import React, { useEffect } from "react";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { Image, StyleSheet, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// import UXTScreen from "@/components/UXTScreen";

const APPLICATION_TOKEN = "your_application_token";
const ACCESS_TOKEN = "your_access_token";
const USER_TOKEN = "your_user_token";

const injectedScript = `
  (function() {
    window.addEventListener('mqAccountLoadSuccess', function(event) {
      alert(JSON.stringify(event));
      window.ReactNativeWebView.postMessage(JSON.stringify(event));
    });
  })();
`;

export default function HomeScreen() {
  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log("Received from WebView:", data);

    if (data.event === "click") {
      console.log("Click event at:", data.x, data.y);
    }
    if (data.event === "load") {
      console.log("WebView loaded");
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/studio.png")}
          style={styles.studioHeader}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">UXT Testing</ThemedText>
        <HelloWave />
      </ThemedView>
      <View style={styles.webViewContainer}>
        {/* <UXTScreen /> */}
        <WebView
          originWhitelist={["*"]}
          source={{
            uri: `https://cardholder-ui-support.github.io/?applicationToken=${APPLICATION_TOKEN}&accessToken=${ACCESS_TOKEN}&userToken=${USER_TOKEN}`,
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
          injectedJavaScript={injectedScript}
          onMessage={handleWebViewMessage}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  studioHeader: {
    width: "100%",
    height: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  webViewContainer: {
    flex: 1,
    height: 400,
    backgroundColor: "black",
  },
});
