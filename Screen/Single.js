import React, { useState, useEffect, useCallback } from "react";
import dateFormat from "dateformat";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import * as noteActions from "../store/actions/nodeAction";
import { Ionicons } from "@expo/vector-icons";
const Single = (props) => {
  // console.log(props.route);
  const details = props.route.params.details;
  const date = props.route.params.date;
  const id = props.route.params.id;
  const [text, setText] = useState(details);
  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();

  const editNote = useCallback(() => {
    dispatch(noteActions.editNotes(id, text));
    props.navigation.navigate("Notes");
  }, [id, text]);

  useEffect(() => {
    props.navigation.setParams({ editNote: editNote });
  }, [editNote]);

  return (
    <View style={{ marginTop: 60, marginLeft: 20, fontSize: 30 }}>
      <Text style={{ marginTop: 12, fontSize: 16, color: "#808080" }}>
        {dateFormat(date, "dddd, mmmm d, yyyy: h:MM TT")}
      </Text>
      <TextInput
        style={{ marginTop: 12, fontSize: 19 }}
        multiline={true}
        // editable={true}
        onFocus={() => setEditable(true)}
        autoFocus={true}
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

Single.defaultNavigationOptions = (navData) => {
  // console.log(navData);
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navData.route.params.editNote();
        }}
      >
        <Ionicons name="md-checkmark" size={24} color="black" />
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
      // marginTop: 32,
      marginRight: 0,
    },
    headerTransparent: true,
    // headerTitle:  navData.route.params.title,

    headerTitle:
      navData.route.params.title.length >= 25
        ? navData.route.params.title.substring(0, 20) + "..."
        : navData.route.params.title.length,
  };
};

export default Single;
