var name_ = new Array();

name_.push("Max");
name_.push(2);
name_.push("NTU EE");

console.log(name_[1]);

for (var index in name_) {
  console.log(name_[index]);
}
//eliminate an element
name_.splice(1, 1);
name_.push(87);

for (var index in name_) {
  console.log(name_[index]);
}

var index = name_.indexOf("Max");

var stack_first = name_.pop();
console.log(stack_first);

var queue_fist = name_.shift();
console.log(queue_fist);
