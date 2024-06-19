var fs = require("fs");

fs.readdir("C:/Users/maxch/cgptocv", function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  for (var index in files) {
    console.log(files[index]);
  }
});
