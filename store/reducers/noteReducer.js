import {
  ADD_NOTE,
  DELETE_NOTES,
  EDIT_NOTES,
  FETCH_NOTES,
} from "../actions/nodeAction";

const initialState = {
  note: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        note: action.notes,
      };
    case EDIT_NOTES:
      return {
        ...state,
        note: action.notes,
      };
    case DELETE_NOTES:
      return {
        ...state,
        note: action.notes,
      };
    case ADD_NOTE:
      //   console.log(state.note);
      // const newNote = {
      //   id: action.data.id,
      //   title: action.data.title,
      //   details: action.data.details,
      //   date: action.data.date,
      // };
      return {
        ...state,
        note: action.notes,
        // note: state.note.concat(newNote),
      };
  }
  return state;
};

export default reducer;
