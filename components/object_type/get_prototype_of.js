/**
 * Syntax - Object.getPrototypeOf(obj)
 * trả về nguyên mẫu của object
 */

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const user = new User('Nguyen', 'John');

console.log('prototype user: ', user);

// add method getFullName to User
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

console.log('full name of user: ', user.getFullName());

// create new object
const newUser = Object.create(user);

newUser.age = 28;

// get prototype of newUser 
const userPrototype = Object.getPrototypeOf(newUser)

console.log('prototype of user: ', userPrototype);

console.log('user: ', user);

console.log('userPrototype: ', newUser);

console.log('compare prototype of newUser with user: ', userPrototype === user);

