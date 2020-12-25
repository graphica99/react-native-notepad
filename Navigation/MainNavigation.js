import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import StartingPage from "../Screen/StartingPage";
import Auth from "../Screen/Auth";
import Home from "../Screen/Home";
import Single from "../Screen/Single";
const stack = createStackNavigator();

import Tabs from "../Navigation/Tab";
import Tab from "../Navigation/Tab";
const MainNavigation = ({ navigation }) => {
  // console.log(Tabs);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {/* <mainNav.Screen name="Home" component={Tab} /> */}
      <stack.Navigator>
        {isLoggedIn ? (
          // <mainNav.Screen name="Home" component={Tab} />
          <>
            <stack.Screen
              name="Home"
              component={Tabs}
              options={{ headerTitle: null, headerTransparent: true }}
            />
            <stack.Screen
              name="Single"
              component={Single}
              options={Single.defaultNavigationOptions}
            />
          </>
        ) : (
          <>
            <stack.Screen
              name="LandingScreen"
              component={StartingPage}
              options={{
                headerStyle: {
                  backgroundColor: "#ffff",
                },
                headerTitle: null,
                headerLeft: null,
                headerTransparent: true,
              }}
            />
            {/* <stack.Screen
              name="Auth"
              component={Auth}
              options={{
                headerTitle: null,
                headerTransparent: true,
                headerLeft: null,
              }}
            /> */}
          </>
        )}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
