var msgpack = require("msgpack");

var myObj = { name: "Fred", email: "cff@gmail.com" };

var packedObj = msgpack.pack(myObj);

var rawObj = msgpack.unpack(packedObj);

console.log(rawObj);
