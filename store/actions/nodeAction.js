export const ADD_NOTE = "ADD_NOTE";
export const FETCH_NOTES = "FETCH_NOTES";
export const EDIT_NOTES = "EDIT_NOTES";
export const DELETE_NOTES = "DELETE_NOTES";
import { insertNote, fetchNote, editNote, deleteNote } from "../../helpers/db";

export const getNotes = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchNote();
      //   console.log(dbResult.rows._array);
      dispatch({ type: FETCH_NOTES, notes: dbResult.rows._array });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteNotes = (id, details) => {
  return async (dispatch) => {
    try {
      const dbResultDelete = await deleteNote(id);
      const dbResult = await fetchNote();
      dispatch({
        type: DELETE_NOTES,
        notes: dbResult.rows._array,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editNotes = (id, details) => {
  return async (dispatch) => {
    try {
      const dbResultUpdate = await editNote(details, id);
      const dbResult = await fetchNote();
      dispatch({
        type: EDIT_NOTES,
        notes: dbResult.rows._array,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const addNote = (noteData) => {
//   return {
//     type: ADD_NOTE,
//     data: {
//       title: noteData.title,
//       details: noteData.details,
//     },
//   };
// };

export const addNote = (noteData) => {
  //   console.log(noteData.details);
  return async (dispatch) => {
    var date = new Date();
    try {
      const dbResultAdd = await insertNote(
        noteData.title,
        noteData.details,
        noteData.date
      );
      const dbResult = await fetchNote();

      // console.log(dbResult);
      dispatch({
        type: ADD_NOTE,
        notes: dbResult.rows._array,
        // data: {
        //   id: dbResult.insertId,
        //   title: noteData.title,
        //   details: noteData.details,
        //   date: noteData.date,
        // },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
