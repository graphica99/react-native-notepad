import React from "react";
import MainNavigation from "./Navigation/MainNavigation";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import noteReducer from "./store/reducers/noteReducer";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database failed");
    console.log(err);
  });

const rootReducers = combineReducers({
  notes: noteReducer,
});

const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
