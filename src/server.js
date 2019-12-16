const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("todolist.sqlite3");

/**
 * 全TODOのjsonを返す。
 */
app.get("/", async (req, res) => {
  res.status(200).json(await findAllTodo());
});

app.listen("8888", async () => {
  console.log("listen 8888");
});

/**
 * すべてのTODOを取得する。
 */
function findAllTodo() {
  return new Promise((resolve, reject) => {
    db.all("select * from todo", (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}
