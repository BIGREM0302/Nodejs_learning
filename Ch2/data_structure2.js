var HashTable = require("hashmap");

var dictionary = {
  fred: "good",
  max: "chaos",
  johowjo: "smart",
};

console.log(dictionary["max"]);

var hashTable = new HashTable();
hashTable.set("Fred", "good");
var value = hashTable.get("Fred");
console.log(value);
