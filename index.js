const fs = require("fs");

console.log("started!!");

try {
  //   fs.readFile("exampleFile.txt", (err, data) => {
  fs.readFile("dummyFile.txt", (err, data) => {
    //   if (err) {
    console.error(err);
    //     return;
    //   }

    console.log(data.toString());
  });
} catch (err) {
  console.error(err);
}

console.log("end");
