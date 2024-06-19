var fs = require("fs");

//var stream = fs.createWriteStream("./writefile-stream.txt");

//stream.write("Hello World");

fs.appendFile("./writefile-stream.txt", "Hello World", function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Append");
});
