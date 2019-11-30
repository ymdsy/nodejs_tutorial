const fs = require("fs");

console.log("started!!");

for (let i = 0; i < 100; i++) {
  fs.appendFile("exampleFile.txt", i + ",", err => {});
}

console.log("end");
