const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("todolist.sqlite3");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen("8888", async () => {
  console.log("listen 8888");
});

/**
 * 全TODOのjsonを返す。
 */
app.get("/", async (req, res) => {
  // 同期
  findAllTodoSync(r => {
    res.status(200).json(r);
  });

  // 非同期
  //   res.status(200).json(await findAllTodo());
});

/**
 * 新しいTODOを登録する。
 * 登録したTODOを含めたすべてのTODOを返す
 */
app.post("/register", async (req, res, next) => {
  insertTodo(req.body.content);
  res.status(200).json(await findAllTodo());
});

/**
 * TODOを更新する。
 * 更新したTODOを返す。
 */
app.put("/update", (req, res) => {
  updateTodo(req.body);
});

/**
 * すべてのTODOを取得する。（同期）
 */
function findAllTodoSync(callback) {
  db.all("select * from todo", (err, rows) => {
    if (err) console.log(err);
    callback(rows);
  });
}

/**
 * すべてのTODOを取得する。（非同期）
 */
function findAllTodo() {
  return new Promise((resolve, reject) => {
    db.all("select * from todo", (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

/**
 * TODOを登録する。
 */
function insertTodo(content) {
  if (content === null) {
    return;
  }
  const stmt = db.prepare("insert into todo(content, executed) values(?, 0)");
  stmt.run(content);
}

/**
 * TODOを更新する。
 */
function updateTodoContent(contents) {
  if (contents === null) {
    return;
  }
  const stmt = db.prepare("update todo set content=?, executed=? where id=?");
  stmt.run([contents.content, contents.executed, contents.id]);
}
