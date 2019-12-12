const fs = require("fs").promises;

console.log("started!!");

const write = async () => {
  for (let i = 0; i < 100; i++) {
    await fs.appendFile("exampleFile.txt", i + ",");
  }
};

write(0);

console.log("end");
