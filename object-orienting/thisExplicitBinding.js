// function foo() {
//   console.log(this.bar);
// }

// var bar = "bar1";
// var obj = { bar: "bar2" };

// foo();
// foo.call(obj);  // .call() executes foo() and applies obj as the this context.

// this: hard binding
// function foo() {
//   console.log(this.bar);
// }

// var obj = { bar: "bar" };
// var obj2 = { bar: "bar2" };

// var orig = foo;

// foo = function() { orig.call(obj); };

// foo();
// foo.call(obj2);

// js provides a built-in method of hard binding to avoid stuff like line 21.

function foo(baz, bam) {
  console.log(this.bar + " " + baz + " " + bam);
}

var obj = { bar: "bar" };
foo = foo.bind(obj, "baz");

foo("bam");
