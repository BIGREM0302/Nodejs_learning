var fs = require("fs");

fs.stat("./traverse.js", function (err, stats) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats);
});
