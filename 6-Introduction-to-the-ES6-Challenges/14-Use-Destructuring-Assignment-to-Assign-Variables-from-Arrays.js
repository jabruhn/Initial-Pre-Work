//destructuring assignments from var arrays.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  a = 6;
  b = 8;
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
