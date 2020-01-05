# nodejs_tutorial

nodejs を触ってみたりする場所

# 必要な環境

- Node.js

# ファイルの実行

`node [ファイル名]`

# テーブル

DB の種類：sqlite3

todo テーブル
| カラム名 | id | content | executed |
| -------- | ----------- | ------- | -------- |
| 型 | INTEGER | TEXT | NUMERIC |
| その他 | PRIMARY KEY, AUTOINCREMENT | |

`create table todo (id integer primary key autoincrement, content text, executed numeric);`

# API

- TODO 取得
  `curl localhost:8888/todo`

- TODO 登録
  `curl -X POST -d 'content=bbb' localhost:8888/todo`

- TODO 更新
  `url -X PUT -d 'executed=0&content=ccc&id=3' localhost:8888/todo`

- TODO 削除
  `curl -X DELETE -d 'id=13' localhost:8888/todo`
