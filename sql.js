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
      iconName TEXT
    );
  `);

  console.log("Base lista");
}

async function insertDataSql(data) {
  try {
    for (const item of data) {
      await db.runAsync(
        `
        INSERT INTO prayers 
        (id, answered, color, feeling, name, prayer, iconName)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        item.id,
        item.answered ? 1 : 0,
        item.color ?? null,
        item.feeling,
        item.name ?? item.feeling,
        item.prayer,
        item.iconName ?? null,
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

    console.log(rows, "SELECT");

    return rows;
  } catch (error) {
    console.log(error, "Error leyendo datos");
  }
}

export { setPrayerSql, insertDataSql, getDataSql };
