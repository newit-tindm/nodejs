/**
 * 
 * IIFE - Immediately Invoked Function Expression - một biểu thức tạo ra một hàm và nó được gọi ngay lập tức
 * 
 */

// const app = (function () {

//     const cars = [];

//     return {
//         get(index) {
//             return cars[index];
//         },

//         add(car) {
//             cars.push(car);
//         },
    
//         edit(index, car) {
//             cars[index] = car;
//         },
    
//         delete(index) {
//             cars.splice(index, 1);
//         }
//     }
// })()


// Day 2 - ES6

const Day2 = `
    arrow function,
    rest parameters,
    Destructuring,
    Spread,
    Template literals,
    Multi-line string,
    Object literals,
    Object properties,
    Modules - import / export,
    classes,
    class inheritance,
    class inheritance - super(),
    class expression,
    static class,
    getter, setter
`;

console.log('Day 2: ', Day2);

const constAndLet = (() => {
    const myBtn = document.getElementById('myBtn');
    // myBtn = 'reassigned'; // error
    console.log('myBtn: ', myBtn);

    let name = 'before';
    // name = 'after';

    console.log('let variable: ', name);
})();

//arrow function
const arrowFn = name => `Hi ${name}`;

console.log('Arrow function: ', arrowFn('tindm'));

// rest parameters - lấy ra tất cả những tham số còn lại

function restPar(a, b, ...params) { 
    console.log('rest parameters: ', params);
}

restPar(1, 2, 3, 'rest'); // a =1, b =2, params = 3 và 'rest'

// Destructuring - phân rã - object, array

let arr = [
    'Javascript',
    'PHP',
    'Ruby',
];

let [a, b, c] = arr;
console.log(`Destructuring: ${a}, ${b}, ${c}`);


function restParDes({name, ...rest}) { 
    console.log('rest parameters des: ', rest);
}

restParDes({
    name: 'tìnm',
    age: 28,
    address: 'HCM',
}); // name = 'tindm', rest = 28 và 'HCM'

// Spread - toán tử dãi

let array1 = [
    'JS',
    'PHP',
    'Node'
];

let array2 = [
    'ReactJS',
    'Ruby'
];

let array3 = [...array1, ...array2];

console.log('Spread: ', array3);

// Spread truyền tham số cho hàm

function logger(...rest) { // rest
    for( let i = 0; i < array1.length; i++ ) {
        console.log(`Spread truyền tham số cho hàm ${i+1}: `, rest[i]);
    }
}

logger(...array1) // Spread

// rest sử dụng khi kết hợp sử dụng với destructuring và định nghĩa ra tham số
// Spread là khi chuyển đổi số và gọi tới hàm chuyển đổi số


// Template literals
const  courseName1 = 'Javascript';
const  courseName2 = 'PHP';

const description = 'Course name: ' + courseName1; // nối chuỗi
const descriptionT = `Course name: ${courseName1} ${courseName2}`; // template string - sử dụng nội suy (trong chính nó có thể suy ra được)

console.log('Template string: ', descriptionT);

// multi-line string
const lines = `
    Line1
    Line2
    Line3
`;

console.log('multi-line string: ', lines);

// Object literals

// 1 Định nghĩa key: value cho object
// 2 Định nghĩa method cho object
// 3 Định nghĩa key cho object dưới dạng biến

let name = 'Javascript';
let price = 1000;

let fieldName = 'name';
let fieldPrice = 'price';

const course = {
    name, //name: name,
    price, //price: price
    getName() {
        return name;
    }   // getName: function () {
        //     return name;
        // }
}

console.log('Enhanced Object literals - Định nghĩa key: value cho object: ', course);
console.log('Enhanced Object literals - Định nghĩa method cho object: ', course.getName());

const course1 = {
    [fieldName]: 'JS',
    [fieldPrice]: 1000,
}

console.log('Enhanced Object literals - Định nghĩa key cho object dưới dạng biến: ', course1);


// Object properties

// thêm thuộc tính, phương thức bên ngoài đối tượng

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.className = 'JS';
User.prototype.getClassName = function() {
    return this.className;
}

let user1 = new User('Nguyen', 'A');
let user2 = new User('Tran', 'B');

console.log('Object prototype - thêm thuộc tính bên ngoài đối tượng: ', user1.className);
console.log('Object prototype - thêm phương thức bên ngoài đối tượng: ', user1.getClassName());

// Modules - tách ra các file khác nhau để xử lý
// Import, Export

import loggerModule from './loggerModule.js';

import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js'; // import destructuring

// import * as constants from './constants.js';


loggerModule('Module: Test message', TYPE_WARN)
// loggerModule('Module: Test message', constants.TYPE_WARN)


// classes

class newCourse {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

const phpCourse = new newCourse('PHP', 1000);
const jsCourse = new newCourse('Javascript', 1200);

console.log('Classes: ', phpCourse);
console.log('Classes: ', jsCourse);

console.log('Classes: ', phpCourse.getName());
console.log('Classes: ', jsCourse.getPrice());

// class inheritance - kế thừa trong class

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log('Eating...');
    }
}

class Bird extends Animal {
    fly() {
        console.log('Flying...');
    }
}

const bird = new Bird('smart bird');

console.log(bird.name);
bird.fly();
bird.eat();


// class inheritance - super()

class Poultry {
    constructor(weight, price) {
        this.weight = weight;
        this.price = price;
    }
}


class Chicken extends Poultry {
    constructor(weight, price, type) {
        super(weight, price) // sử dụng super để javascript có thể hiểu được class chicken muốn kế thừa thuộc tính nào
        this.type = type;
    }
}

const chicken = new Chicken(2, 100, 'garden')

console.log('class inheritance - super(): ', chicken);

// class expression

const pou = class Poultry1 {
    constructor(weight, price) {
        this.weight = weight;
        this.price = price;
    }
}


class Chicken1 extends pou {
    constructor(weight, price, type) {
        super(weight, price) 
        this.type = type;
    }
}

const chicken1 = new Chicken1(2, 100, 'garden')

const pou1 = new pou(2, 200)

console.log('class expression: ', chicken1);

console.log('class expression: ', pou1);

// static class  

class Foo {
    static someMethod() {
        console.log('Static class: Some method');
    }

    anotherMethod() {
        console.log('Another method');
    }
}

const foo = new Foo(); // instance - một object được tạo ra từ một class nào đó
foo.anotherMethod();

Foo.someMethod();

// getter/ setter

const obj = {
    foo: 'This is value of getter',

    getFoo: function() {
        return this.foo;
    },

    setFoo: function (val) {
        this.foo = val;
    }
}

console.log('getter: ', obj.getFoo());

obj.setFoo('This is value of setter');

console.log('setter: ', obj.getFoo());

