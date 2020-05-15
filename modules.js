// Video 2-4 Closure - Module Patterns

// Not a module. Encapsulation is necessary to realize module pattern.
// var foo = {
//   o: { bar: "bar" },
//   bar() {
//     console.log(this.o.bar);
    
//   }
// };

// foo.bar(); // "bar"

// classic module pattern
// var foo = (function () {
//   var o = { bar: "bar"};

//   return {
//     bar: function() {
//       console.log(o.bar);
      
//     }
//   }
// })();

// foo.bar();

// Classic module pattern: modified
// var foo = (function() {
//   var publicAPI = {
//     bar: function() {
//       publicAPI.baz();
//     },
//     baz: function() {
//       console.log("baz");
//     }
//   };
//   return publicAPI;
// })();

// foo.bar();

// modern module pattern
// example of something from requirejs
// define("foo", function() {
//   var o = { bar: "bar"};

//   return {
//     bar: function() {
//       console.log(o.bar);
//     }
//   }
// })

// ES6+ Module Pattern

// foo.js start
var o = { bar: "bar"};
export function bar() {
  return o.bar
}
// foo.js end

import { bar } from foo.js;

bar(); // "bar"

// *****************

import * as foo from "foo.js";

foo.bar();