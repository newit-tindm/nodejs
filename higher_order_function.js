// higher order function

function sum(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function math(a, b, operator) {
    return operator(a, b);
}

console.log(math(1, 2, mul));