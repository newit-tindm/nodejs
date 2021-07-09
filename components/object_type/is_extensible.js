/**
 * Syntax - Object.isExtensible(obj)
 * Kiểm tra object có thể được mở rộng hay không
 * Object có thể mở rộng là object có thể thêm property cho nó
 * Một object có thể không được mở rộng nếu sử dụng Object.preventExtensions(), Object.seal(), hoặc Object.freeze()
 */

// object mới có thể mở rộng được
var obj = {};

const obj1 = Object.isExtensible(obj);

console.log(obj1); // true

obj.property1 = 'property 1';

console.log(obj);

var newObj = {};

const newObj1 = Object.preventExtensions(newObj);

console.log(newObj1); // false

newObj.property1 = 'property 1';

console.log(newObj); // TypeError: Cannot add property property1, object is not extensible

// sealed - niêm phong (biến sealed đã khai báo được định nghĩa là non-extensible)
var sealed = Object.seal({});

console.log(Object.isExtensible(sealed)); // false

// frozen - đóng băng (biến frozen đã khai báo được định nghĩa là non-extensible)
var frozen = Object.seal({});

console.log(Object.isExtensible(sealed)); // false
