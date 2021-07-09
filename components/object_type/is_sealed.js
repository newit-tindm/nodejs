/**
 * Syntax - Object.isSealed(obj)
 * Kiểm tra object có bị niêm phong hay không
 */

const obj = {
    a: 1
};

Object.seal(obj);

console.log(Object.isSealed(obj)); // true

var empty = {};

Object.preventExtensions(empty);

// object empty non-extensible
Object.isSealed(empty); // true

var newObj = {
    name: 'property'
};

Object.preventExtensions(newObj);
console.log(Object.isSealed(newObj)); // false
                                      // bởi vì thuộc tính configurable của name đang là true

Object.defineProperty(newObj, 'name', {
    configurable: false
});

console.log(Object.isSealed(newObj)); // true

// seal 1 object empty thì nó là 1 object freeze (đóng băng)
var objEmp = {};

Object.seal(objEmp);

console.log('object empty is Frozen: ', Object.isFrozen(objEmp));

// nhưng seal 1 object có property thì nó  không phải là 1 object freeze (đóng băng)
var objNotEmp = {
    name: 'property 1'
};

Object.seal(objNotEmp);

console.log('object not empty is Frozen: ', Object.isFrozen(objNotEmp));
