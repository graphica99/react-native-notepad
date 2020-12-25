import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as noteAction from "../store/actions/nodeAction";
const Add = (props) => {
  const [isFocus, setIsFocus] = useState(true);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const dispatch = useDispatch();
  const validate = useCallback(() => {
    if (title || details == " ") {
      return true;
    }
  }, [title, details]);
  const addNote = useCallback(async () => {
    const valStatus = validate();
    if (!valStatus) {
      Alert.alert(
        "Invalid Note",
        "Please enter a title and a note",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      const data = {
        title: title,
        details: details,
        date: new Date().toString(),
      };
      dispatch(noteAction.addNote(data));
      await props.navigation.navigate("Notes");
      setTitle("");
      setDetails("");
    }
  }, [title, details]);

  useEffect(() => {
    props.navigation.setParams({ addNote: addNote });
  }, [addNote]);

  return (
    <View style={styles.container}>
      <View style={styles.titleController}>
        <TextInput
          style={styles.titleInputController}
          placeholder="Title"
          value={title}
          onChangeText={(text) => {
            setTitle(text);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Enter your note(s) here"
          value={details}
          onChangeText={(text) => {
            setDetails(text);
          }}
        />
      </View>
    </View>
  );
};

Add.defaultNavigationOptions = (navData) => {
  // console.log(navData.route);

  // const addNote = navData.navigation.getParam("addNote");
  // const addNote = navData.route.params("addNote");
  return {
    headerTransparent: true,
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navData.route.params.addNote();
        }}
      >
        <Ionicons name="md-checkmark" size={30} color="black" />
      </TouchableOpacity>
    ),
    headerStyle: {
      // marginVertical: 10,
    },
    headerTitleStyle: {
      marginTop: 32,
    },
    headerRightContainerStyle: {
      marginTop: 32,
      marginRight: 20,
    },
  };
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    marginBottom: 0,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 55,
  },
  titleController: {
    alignItems: "center",
    marginTop: 25,
    fontSize: 18,
  },
  textInput: {
    borderWidth: 0,
    padding: 11,
    borderRadius: 3,
    width: "98%",
    fontSize: 21,
  },
  titleInputController: {
    borderWidth: 0,
    padding: 11,
    borderRadius: 3,
    width: "98%",
    fontSize: 20,
    fontWeight: "800",
  },
});
export default Add;
