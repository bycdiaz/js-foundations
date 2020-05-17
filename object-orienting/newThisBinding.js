function foo() {
  this.baz = "baz";
  console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo();

// new keyword behavior
// 1. Creates new, empty object.
// 2. *Newly created object gets linked to another object.
// 3. Newly created object gets passed into the this
//    context to the function call.
// 4. If function doesn't aready return an object, it assumes
//    the new keyword assumes you meant to return the object
//    that was passed in.