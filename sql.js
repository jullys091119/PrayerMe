import * as SQLite from "expo-sqlite";

let db;

async function setPrayerSql() {
  db = await SQLite.openDatabaseAsync("prayers");

  await db.execAsync(`
  CREATE TABLE IF NOT EXISTS prayers (
    id TEXT PRIMARY KEY NOT NULL,
    answered INTEGER,
    color TEXT,
    feeling TEXT,
    name TEXT,
    prayer TEXT,
    iconName TEXT,
    date TEXT
  );
`);

  await db.execAsync(`
  CREATE TABLE IF NOT EXISTS verses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  reference TEXT NOT NULL,
  text TEXT NOT NULL,
  category TEXT,
  favorite INTEGER DEFAULT 1,
  learned INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
  `);
  /*   await db.execAsync(`
  ALTER TABLE prayers
  ADD COLUMN date TEXT;
`); */
  console.log("Base lista");
}

const showTables = async () => {
  const result = await db.getAllAsync(
    "SELECT name FROM sqlite_master WHERE type='table';",
  );

  console.log(result);
};

async function insertDataSql(data) {
  console.log(data, "sql insert datax");
  try {
    for (const item of data) {
      await db.runAsync(
        `
        INSERT INTO prayers 
        (id, answered, color, feeling, name, prayer, iconName, date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        item.id,
        item.answered ? true : false,
        item.color ?? null,
        item.feeling,
        item.name ?? item.feeling,
        item.prayer,
        item.iconName ?? null,
        item.date,
      );
    }

    console.log("Insert exitoso");
  } catch (error) {
    console.log(error, "Error insertando");
  }
}


async function insertVerseSql(verse) {
  try {
    await db.runAsync(
      `
      INSERT INTO verses 
      (reference, text, category, favorite, learned)
      VALUES (?, ?, ?, ?, ?)
      `,
      verse.reference,
      verse.text,
      verse.category,
      1,
      0
    );

    console.log("Versículo guardado");
  } catch (error) {
    console.log(error, "Error insertando versículo");
  }
}

async function getDataSql() {
  try {
    const rows = await db.getAllAsync(`
      SELECT * FROM prayers
    `);
    return rows;
  } catch (error) {
    console.log(error, "Error leyendo datos");
  }
}

async function getVerseSql() {
  try {
    const rows = await db.getAllAsync(`
      SELECT * FROM verses
    `);
    return rows;
  } catch (error) {
    console.log(error, "Error leyendo datos de versos");
  }
}

async function setAnsweredSql(id, bool) {
  try {
    const res = await db.runAsync(
      "UPDATE prayers SET answered = ? WHERE id = ?",
      [bool ? 1 : 0, id],
    );

    console.log("Filas actualizadas:", res.changes);

    const data = await getDataSql();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function deletePrayerSql(id) {
  try {
    await db.runAsync(
      `DELETE FROM prayers WHERE id = ?`,
      [id], // the message you want to delete
    );
    console.log("Delete success!!");
  } catch (error) {
    console.log(error, "delete error!!");
  }
}

async function filterPerAnswered(answered) {
  console.log(answered);
  try {
    const rows = await db.getAllAsync(
      `SELECT * FROM prayers WHERE answered = ?`,
      [answered],
    );

    return rows;
  } catch (error) {
    console.log(error, "No filter");
  }
}

export {
  setPrayerSql,
  insertDataSql,
  getDataSql,
  setAnsweredSql,
  deletePrayerSql,
  filterPerAnswered,
  showTables,
  insertVerseSql,
  getVerseSql,
};
