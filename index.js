const fs = require("fs");
const rs = fs.createReadStream("exampleFile.txt");

console.log("started!!");

rs.on("data", data => {
  console.log(data.toString());
});

rs.on("error", err => {
  console.error(err);
});

console.log("end");
