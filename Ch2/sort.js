var arr = ["arr", "ree", "dfs", "eqre", "dfsd", "johowjo"];
arr.sort();

console.log(arr);

var arr = [1, 10, 2, 34, 2304, 120, 4020404];

//customized sort way
arr.sort();
console.log(arr);
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
