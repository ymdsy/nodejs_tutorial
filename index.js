const fs = require("fs");

console.log("started!!");

const write = i => {
  if (i > 100) return;

  fs.appendFile("exampleFile.txt", i++ + ",", err => {
    write(i);
  });
};

write(0);

console.log("end");
