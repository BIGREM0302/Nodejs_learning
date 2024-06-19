var fs = require("fs");

var files = fs.readdirSync("C:/Users/maxch/cgptocv");

console.log(files);

for (var index in files) {
  console.log(files[index]);
}

for (var name of files) {
  console.log(name);
}
