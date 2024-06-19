var zlib = require("zlib");
var buffer = require("buffer");

var source = Buffer.from("Hello World");
var med;

zlib.deflate(source, (err, result) => {
  if (err) {
    console.error("Error occurring during compression");
    return;
  }
  med = result;
  console.log(result);
});

zlib.inflate(med, (err, original) => {
  if (err) {
    console.error("Error occurring during recovery");
    return;
  }
  console.log(original);
  console.log(original.toString());
});
