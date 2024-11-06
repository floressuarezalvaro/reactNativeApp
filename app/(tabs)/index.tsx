import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import UXTScreen from "@/components/UXTScreen";

export default function HomeScreen() {
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
        <ThemedText type="title">Product Enablement</ThemedText>
        <HelloWave />
      </ThemedView>
      <View style={styles.webViewContainer}>
        <UXTScreen />
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
