var fs = require("fs");
var archiver = require("archiver");
const { arch } = require("os");

var output = fs.createWriteStream("output.zip");
var output_ = fs.createWriteStream("output_.zip");

output_.on("close", function () {
  console.log("Done");
});

output.on("close", function () {
  console.log("Done");
});

var archive = archiver("zip");
archive.on("error", function (err) {
  throw err;
});

archive.pipe(output);

archive
  .append(fs.createReadStream("./data/test1.txt"), { name: "file1.txt" })
  .append(fs.createReadStream("./data/test2.txt"), { name: "file2.txt" })
  .finalize();

var archive_ = archiver("zip");
archive_.on("error", function (err) {
  throw err;
});

archive_.pipe(output_);

archive_.glob("*.txt", { cwd: "data/" });

archive_.finalize();
