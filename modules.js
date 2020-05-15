// Video 2-4 Closure - Module Patterns

// Not a module

var foo = {
  o: { bar: "bar" },
  bar() {
    console.log(this.o.bar);
    
  }
};

foo.bar(); // "bar"