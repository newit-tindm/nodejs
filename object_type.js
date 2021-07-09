// trong js có sẵn các object như Date, Number
// cách tạo 1 object
let obj = new Object(); // cách 1
let obj1 = {}; // cách 2

// mỗi object sẽ có thuộc tính và phương thức

console.log(obj1);

let car = {
    name: 'Audi V8',
    cost: 50000,
    getName: function () {
        return this.name;
    }
};

let car2 = {
    name: 'Mazda A1',
    cost: 30000,
    getCost: function () {
        return this.cost;
    }
};

// static method
// object assign - copy tất cả thuộc tính và phương thức của object

Object.assign(car, car2);

console.log('object assign: ', car);


//object create - tạo object mới sử dụng lại nhũng property của object cũ

let user = {
    firstName: 'tin',
    lastName: 'dm',
    age: 28
}
let newUser = Object.create(user)

newUser.age = 30;

let newUser1 = Object.create(newUser, {
    address: {
        value: 'HCM'
    }
})

console.log('Object create:', newUser.firstName);

console.log('Object create 1:', newUser1);

// object defineProperties - thêm mới hoặc khai báo lại thuộc tính đã có của object

let object1 = {};

Object.defineProperties(object1, {
    property1: {
        value: 1
    }, 
    property2: {}
});

console.log('object defineProperties: ', object1);

// object defineProperty - thêm mới hoặc khai báo lại thuộc tính đã có của object

let object2 = {};

Object.defineProperty(object2, 'property1', {
    value: 1
});

console.log('object defineProperty: ', object2);

// object entries - trả về 1 array của object với key: value là các phần tử của 1 mảng trả về

let objectEntry = {
    a: 'something',
    b: 'value'
};

console.log('object entries: ', Object.entries(objectEntry));

// object freeze - đóng băng object- không thể gán lại các thuộc tính của object

let objFreeze = {
    a: 1
};

Object.freeze(objFreeze);

// objFreeze.a = 2; // error

console.log('object freeze: ', objFreeze.a);

// object fromEntries - biến đổi danh sách key-value trong object

let objFromEntry = new Map([
    ['firstName', 'tin'], 
    ['lastName', 'dm']
]);

let objFromEntry3 = [
    ['firstName', 'new name'],
    ['address', 'HCM']
];

let objFromEntry1 = Object.fromEntries(objFromEntry);

let objFromEntry2 = Object.fromEntries(objFromEntry3);

console.log('object fromEntries: ', objFromEntry1);
console.log('object fromEntries 2: ', objFromEntry2);

// object getOwnPropertyDescriptor - lấy ra value của key trong object

let objGetOwnPro = {
    property: 'abc',
    property2: 'xyz'
}

let objGetOwnPro2 = Object.getOwnPropertyDescriptor(objGetOwnPro, 'property');

console.log('object getOwnPropertyDescriptor: ', objGetOwnPro2.value);

// object get OwnPropertyNames - trả về array của tất cả các key của object 

let objGetOwnProName = {
    a: 1,
    b: 2,
    c: 3
};

console.log('object getOwnPropertyNames: ', Object.getOwnPropertyNames(objGetOwnProName));

// object get OwnPropertySymbols - trả về array tất cả các type symbol tìm thấy trong object

let objGetOwnProSym = {
    name: 'object contain symbols'
};
let a = Symbol('a');
let b = Symbol.for('b');

objGetOwnProSym[a] = 'localSymbol';
objGetOwnProSym[b] = 'globalSymbol';

let objSymbols = Object.getOwnPropertySymbols(objGetOwnProSym);

console.log('object getOwnPropertySymbols: ', objSymbols);

// object get PrototypeOf - trả về nguyên mẫu của object

let objGetProOf = {};

let objGetProOf2 = Object.create(objGetProOf);

objGetProOf.property1 = 'property 1';

console.log('object objGetProOf: ', objGetProOf);

let objGetProOf3 = Object.getPrototypeOf(objGetProOf2);

console.log('object objGetProOf: ', objGetProOf === objGetProOf3);

// object prototype hasOwnProperty - kiểm tra object có tồn tại key muốn kiểm tra ko

let objHasOwnPro = {
    property1: 'property 1',
}

console.log('object hasOwnProperty: ', objHasOwnPro.hasOwnProperty('property1'));

console.log('object hasOwnProperty: ', objHasOwnPro.hasOwnProperty('property2'));

// object is - kiểm tra 2 giá trị đã khai báo có giống nhau không

console.log('object is: ', Object.is(2, 23));

// object isExtensible 