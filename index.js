const request = require("request");

request("https://www.yahoo.co.jp", (err, res, body) => {
  console.log(res.statusCode);
});
