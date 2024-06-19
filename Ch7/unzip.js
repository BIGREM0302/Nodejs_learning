var fs = require("fs");
var unzip = require("unzipper");
var path = require("path");

var source = fs.createReadStream("output.zip");
const outputdir = path.join(__dirname, "output");

source
  .pipe(unzip.Extract({ path: outputdir }))
  .on("close", () => {
    console.log("Extraction complete");
  })
  .on("error", (err) => {
    console.error("Error during extraction", err);
  });
