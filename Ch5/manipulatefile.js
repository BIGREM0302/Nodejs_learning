var fs = require("fs");

fs.exists("C:/Users/maxch/cgptocv", function (exists) {
  console.log(exists);
});

fs.unlink("C:/Users/maxch/cgptocv/sift.py~", function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Removed");
});
