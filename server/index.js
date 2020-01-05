const fs = require("fs");
const rs = fs.createReadStream("exampleFile.txt", "utf8");

console.log("started!!");

(async function() {
  try {
    for await (const data of rs) {
      for (const item of data) {
        console.log(item);
      }
    }
  } catch (err) {
    console.error(err);
  }
})();

console.log("end");
