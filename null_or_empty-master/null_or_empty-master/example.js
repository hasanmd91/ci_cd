// Change './index' to 'is-null-or-empty' if you use this code outside of this package
var isNullOrEmpty = require('./index');

console.log(isNullOrEmpty("")); // true
console.log(isNullOrEmpty(null)); // true
console.log(isNullOrEmpty(undefined)); // true

console.log(isNullOrEmpty("Hello World")); // false
