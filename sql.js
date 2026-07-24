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
/*   await db.execAsync(`
  ALTER TABLE prayers
  ADD COLUMN date TEXT;
`); */
  console.log("Base lista");
}

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

export { setPrayerSql, insertDataSql, getDataSql, setAnsweredSql };
