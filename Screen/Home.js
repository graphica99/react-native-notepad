import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { SafeAreaView, TextInput } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import * as noteActions from "../store/actions/nodeAction";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import CardComponent from "../Components/CardComponent";
const Home = (props) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  // console.log(noteState);
  useEffect(() => {
    setIsLoading(true);
    const fetchNote = async () => {
      await dispatch(noteActions.getNotes());
      setIsLoading(false);
    };
    fetchNote();
  }, [n, isFocused]);

  const n = useSelector((state) => state.notes.note);
  const [noteState, setNoteState] = useState(n);

  const onSearchInputController = () => {
    let searchedNote = noteState.filter(
      (note) => note.title === search || note.title.toLowerCase() === search
    );
    if (searchedNote.length) {
      setNoteState(searchedNote);
    } else if (search.length === 0) {
      setNoteState(n);
    }
  };

  if (!isLoading && noteState.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No Notes found. Maybe start adding some!</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  // console.log(notes);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginLeft: "5%",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "900" }}>All Notes</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginHorizontal: "5%",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <TextInput
            style={{
              backgroundColor: "#ccc",
              borderRadius: 23,
              width: "100%",
              padding: 10,
            }}
            placeholder="search"
            value={search}
            onChangeText={(text) => {
              setSearch(text);
            }}
            onKeyPress={onSearchInputController}
          />
        </View>
        <View>
          <FlatList
            data={noteState}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              //props
              // console.log(itemData),
              <CardComponent
                onLongPress={() => {
                  Alert.alert(
                    "Delete",
                    `Are you sure you want to delete the note with title : ${itemData.item.title}`,
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("cancel pressed"),
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        style: "destructive",
                        onPress: () =>
                          dispatch(noteActions.deleteNotes(itemData.item.id)),
                      },
                    ],
                    { cancelable: false }
                  );
                }}
                onListHandler={() => {
                  props.navigation.navigate("Single", {
                    id: itemData.item.id,
                    title: itemData.item.title,
                    details: itemData.item.details,
                    date: itemData.item.date,
                  });
                }}
                text={
                  itemData.item.title.length >= 25
                    ? itemData.item.title.substring(0, 20) + "..."
                    : itemData.item.title
                }
                // time={dateFormat(itemData.item.date, "h:MM TT")}
                time={dateFormat(itemData.item.date, "mmm d, yyyy")}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

Home.defaultNavigationOptions = (navData) => {
  return {
    headerTitle: "All notes",
    headerLeft: null,
  };
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default Home;
