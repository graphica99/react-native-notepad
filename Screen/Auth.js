import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";

const Auth = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignInLoading, setIsSignInLoading] = useState(false);
  const signUpHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("signing up");
      setIsSignUp(true);
      setIsLoading(false);
    }, 2000);
    // if(isSignUp){

    // }
  };

  const signInHandler = () => {
    let firstTap = false;
    if (!isSignUp) {
      setIsSignUp(true);
      firstTap = true;
    }
    if (!firstTap) {
      setIsSignInLoading(true);
    }
    setTimeout(() => {
      navigation.navigate("Home");
      console.log("logging in");
      setIsSignUp(true);
      setIsSignInLoading(false);
    }, 2000);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
            flex: 3,
          }}
        >
          <Text
            style={{
              alignSelf: "flex-start",
              marginHorizontal: "10%",
              fontSize: 20,
            }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </Text>
          {!isSignUp ? (
            <TextInput
              style={styles.inputStyle}
              autoCompleteType="username"
              placeholder="Username"
              keyboardAppearance="dark"
              keyboardType="default"
              maxLength={7}
            />
          ) : null}
          <TextInput
            style={styles.inputStyle}
            autoCompleteType="email"
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputStyle}
            autoCompleteType="password"
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isSignUp ? null : (
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20,
              }}
              onPress={signUpHandler}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={["#4c669f", "#192f6a"]}
                style={{
                  padding: 10,
                  alignItems: "center",
                  borderRadius: 8,
                  width: "80%",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "transparent",
                    fontSize: 15,
                    color: "#fff",
                  }}
                >
                  {/* {isSignUp ? "Sign In" : "Sign Up"} */}
                  {isLoading ? (
                    <ActivityIndicator
                      size="small"
                      color="#fff"
                      style={{ justifyContent: "center", alignItems: "center" }}
                    />
                  ) : (
                    "Sign Up"
                  )}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={signInHandler}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#66757F", "#292F33"]}
              style={{
                padding: 10,
                alignItems: "center",
                borderRadius: 8,
                width: "80%",
              }}
            >
              <Text
                style={{
                  backgroundColor: "transparent",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                {/* {isSignUp ? "Sign Up" : "Sign In"} */}
                {isSignInLoading ? (
                  <ActivityIndicator
                    color="#fff"
                    size="small"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  />
                ) : (
                  "Sign In"
                )}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: "30%",
  },
  inputStyle: {
    borderWidth: 0,
    padding: 11,
    borderRadius: 3,
    marginVertical: 12,
    width: "80%",
    backgroundColor: "#fff",
  },
});

export default Auth;
