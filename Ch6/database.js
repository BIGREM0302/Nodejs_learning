var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Maru0856",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  connection.end();
});
