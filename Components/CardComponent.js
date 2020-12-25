import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const CardComponent = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={props.onListHandler}
          onLongPress={props.onLongPress}
        >
          {/* <TouchableWithoutFeedback onLongPress={props.onLongPress}> */}
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 12,
                fontSize: 25,
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "600" }}>
                {props.text}
              </Text>
              <Text>{props.time}</Text>
            </View>
          </View>
          {/* </TouchableWithoutFeedback> */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  card: {
    marginVertical: 7,
    width: "90%",
    height: 50,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: "#fff",
  },
});
export default CardComponent;

// style={{
//   margin: 12,
//   alignSelf: "flex-start",
//   alignContent: "center",
//   fontSize: 17,
// }}
