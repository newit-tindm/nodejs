/**
 * Syntax - Object.prototype.isPrototypeOf(obj)
 * Kiểm tra xem 1 object có tồn tại trong chuỗi nguyên mẫu của object khác hay không
 * 
*/

function Foo() {};

function Bar() {};

function Baz() {};

Bar.prototype = Object.create(Foo.prototype);

Baz.prototype = Object.create(Bar.prototype);

const foo = new Foo();

const bar = new Bar();

const baz = new Baz();

console.log('foo: ', foo);

console.log('bar: ', bar);

console.log('baz: ', baz);

console.log(Foo.prototype.isPrototypeOf(foo)); // true
console.log(Bar.prototype.isPrototypeOf(bar)); // true
console.log(Baz.prototype.isPrototypeOf(baz)); // true

console.log(Baz.prototype.isPrototypeOf(bar)); // false

