/**
 * Syntax - Object.seal(obj)
 * phương thức niêm phong object không cho thêm thuộc tính vào object, 
 * nhưng vẫn có thể thay đổi giá trị của các thuộc tính đã khai báo
 */

const obj = {
    property1: 'property 1'
};

Object.seal(obj);

// thêm mới thuộc tính vào object
// obj.property2 = 'property 2'; // error, obj is not extensible - không thể mở rộng

// edit thuộc tính đã khai báo
obj.property1 = 'new property';

console.log(obj);