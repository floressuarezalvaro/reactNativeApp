import React from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet } from "react-native";

const UXTScreen = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="module" src="https://web.cardholder-ui-sdk.marqeta.com/mqde/releases/0.22/index.js"></script>
        <title>Product Enablement</title>
        <script>
          window.addEventListener("load", (event) => {
            window.marqeta.bootstrap({
              authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3Rva2VuIjoibXFfdGVzdF9jaF9zZGsiLCJwcm9ncmFtX3Nob3J0X2NvZGUiOiJtcWRlIiwiaXNfc2FuZGJveCI6dHJ1ZSwib3JpZ2luYWxfc2Vzc2lvbl9zdGFydCI6MTczMDkxNjg0Mi4xOTcsImlhdCI6MTczMDkxNjg0MiwiZXhwIjoxNzMwOTE3MTQyfQ.CUwkO_gpQKw7_I7-scPkghcK-RExxqV37dEgokCcD9Q",
              platformType: "react-native"
            });
          });
        </script>
      </head>
      <body>
        <h1>V22</h1>
        <mq-account></mq-account>
        <mq-card can-change-sides="true" card-token="b60e83a8-d001-41e0-a46e-471116f3ce8e"></mq-card>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UXTScreen;
