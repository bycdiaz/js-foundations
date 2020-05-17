// Every* function, while executing, has a reference to its
// current execution context called this.

// * arrow functions don't have access to this

// Javascript's version of dynamic scope is this.

function foo() {
  console.log(this.bar); // default binding - looks to the global scope
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };

foo();
o2.foo(); //implicit this binding
o3.foo();