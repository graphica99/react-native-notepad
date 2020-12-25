import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SplashImage } from "../Constants/Images";

const StartingPage = ({ navigation }) => {
  // const auth = false;
  const [auth, setAuth] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={SplashImage.splash}
          style={styles.image}
        />
      </View>
      <View style={styles.text}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            marginHorizontal: 10,
            marginVertical: 0,
          }}
        >
          Have you been in a moment of forgetting all the creative Ideas that
          came to you?
        </Text>
        <Text>NotePad is Here for you!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: "#46aeff",
            width: "70%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={() => {
            // console.log(navigation);
            // navigation.navigate("Notes");
            // navigation.navigate("Home", { screen: "Notes" });
          }}
        >
          <Text>Start Writing</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {},
});

export default StartingPage;
