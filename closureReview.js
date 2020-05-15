// What is a closure and how is it created?

// A functions ability to reference variables in a scope
// where it is initialized even if called outside of that
// lexical scope.

// How long does a closure's scope stay around?
// Until there is no more closure over it.

// Why doesn't a function callback inside a loop behave
// as expected? How do we fix it?
// We needed a new i for each iteration. IIFE helped create
// a new i. Putting let in loop header also helped.

// How do you use a closure to create an encapsulated module?
// What's the benefit of that approach?
// An outer-enclosing function that runs once. An inner function
// that gets returned.