var msgpack = require("msgpack");

var myObj = { name: "Fred", email: "000" };

var packedObj = msgpack.pack(myObj);

console.log(packedObj);
