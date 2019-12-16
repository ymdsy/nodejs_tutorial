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
