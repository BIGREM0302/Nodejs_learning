var fs = require("fs");

fs.readFile("./readfile-stream.js", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});

var stream = fs.createReadStream("./readfile-stream.js");

stream.on("data", function (data) {
  console.log(data.toString());
});
