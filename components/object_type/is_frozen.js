/**
 * Syntax - Object.isFrozen(obj)
 * Xác định xem object có bị đóng băng hay không
 * 1 object đóng băng khi và chỉ khi nó không được mở rộng 
*/

var obj = {
    property1: 'property 1'
};

console.log(Object.isFrozen(obj)); // false

Object.freeze(obj);

console.log(Object.isFrozen(obj)); // true

obj.property1 = 'property after freeze'; // error

// {} object rỗng là object được mở rộng nên không đóng băng
Object.isFrozen({}); // false

// Object.preventExtensions({}) - không được mở rộng
var vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // true
