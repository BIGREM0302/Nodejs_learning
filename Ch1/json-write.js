var fs = require("fs");

var obj = {
  name: "Fred",
  friends: ["Chuck", "Wesley", "Louis"],
};

fs.writeFile("./saved.json", JSON.stringify(obj), function (err) {
  if (err) throw err;
  console.log("Saved");
});
