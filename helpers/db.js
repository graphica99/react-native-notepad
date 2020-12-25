import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("notes.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      // id,title,details,date
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, details TEXT NOT NULL , date TEXT NOT NULL)",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertNote = (title, details, date) => {
  console.log("title:" + title);
  console.log("details:" + details);
  console.log("date:" + date);
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO notes (title,details,date) VALUES (?,?,?)`,
        [title, details, date],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchNote = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM notes ORDER BY date DESC`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const editNote = (details, id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE notes SET details=(?) WHERE id=(?)`,
        [details, id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const deleteNote = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE from notes WHERE id=(?)`,
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
// ORDER BY date ASC
