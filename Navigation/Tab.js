import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screen/Home";
import Add from "../Screen/Add";
import Profile from "../Screen/Profile";

const Tabs = createBottomTabNavigator();
const addStack = createStackNavigator();
const profileStack = createStackNavigator();
const AddNote = () => {
  return (
    <addStack.Navigator>
      <addStack.Screen
        name="Add Note"
        component={Add}
        options={Add.defaultNavigationOptions}
      />
    </addStack.Navigator>
  );
};

const UserProfile = () => {
  return (
    <profileStack.Navigator>
      <addStack.Screen name="Profile" component={Profile} />
    </profileStack.Navigator>
  );
};

const tabOptions = {
  showLabel: false,
  style: {
    height: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
};
const Tab = () => {
  return (
    <Tabs.Navigator
      initialRouteName={Home}
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? "#192f6a" : "#cccc";
          switch (route.name) {
            case "Notes":
              return <Ionicons name="md-book" size={34} color={tintColor} />;

            case "Add":
              return (
                <Ionicons
                  name="ios-add-circle-outline"
                  size={34}
                  color={tintColor}
                />
              );

            // case "Account":
            //   return <Ionicons name="ios-person" size={34} color={tintColor} />;
          }
        },
      })}
    >
      <Tabs.Screen
        name="Notes"
        component={Home}
        options={Home.defaultNavigationOptions}
      />
      <Tabs.Screen name="Add" component={AddNote} />
      {/* <Tabs.Screen name="Account" component={UserProfile} /> */}
    </Tabs.Navigator>
  );
};
export default Tab;
