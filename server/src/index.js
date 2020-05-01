const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("todolist.sqlite3");
var cors = require("cors");

app.use(cors()); // すべての要求を許可する
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.listen("8888", async () => {
  console.log("listen 8888");
});

/**
 * 全TODOのjsonを返す。
 */
app.get("/todo", async (req, res) => {
  // 同期
  // findAllTodoSync((r) => {
  //   res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  //   res.status(200).json(r);
  // });

  // 非同期
  res.status(200).json(await findAllTodo());
});

/**
 * 新しいTODOを登録する。
 * 登録したTODOを含めたすべてのTODOを返す
 */
app.post("/todo", async (req, res, next) => {
  insertTodo(req.body.content);
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.status(200).json(await findAllTodo());
});

/**
 * TODOを更新する。
 * 更新したTODOを返す。
 */
app.put("/todo", async (req, res) => {
  updateTodo(req.body);
  // res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.status(200).json(await findAllTodo());
});

/**
 * TODOを削除する。
 */
app.delete("/todo", async (req, res) => {
  deleteTodo(req.body);
  // res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.status(200).json(await findAllTodo());
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
function updateTodo(contents) {
  if (contents === null) {
    return;
  }
  const stmt = db.prepare("update todo set content=?, executed=? where id=?");
  stmt.run([contents.content, contents.executed, contents.id]);
}

/**
 * TODOを削除する。
 */
function deleteTodo(contents) {
  if (contents.id === null) {
    return;
  }
  const stmt = db.prepare("delete from todo where id = ?");
  stmt.run(contents.id);
}
