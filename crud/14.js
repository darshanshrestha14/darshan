function callName() {
    const name = 'Sudip';
    console.log(`Hello, ${name}!`);
}

// Call the function
callName(); // Output: Hello, Sudip!

const greeting = function(name){
    return `hello ${name}`;
};
console.log(greeting("suraj"));
console.log(greeting("darshan"));
//function declaration and fucntion expression 
//function arrow expression 
const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
};

// Example usage
console.log(checkEvenOdd(2)); 
console.log(checkEvenOdd(1)); 
function subtractNumbers(a, b) {
    return a - b;
}

// Example usage
console.log(subtractNumbers(10, 5)); // Output: 5
console.log(subtractNumbers()); // Output: -10

function greet(name = 'User') {
    console.log(`Hello, ${name}!`);
}

// Example usage
greet('Sudip'); 
greet();      

// 7.1 scope and closures
// global scope and local scope(function scope and block scope)
var globalVar = "I am global variable";
let globalLet = "I am global let";
const globalConst = "I am global const";

function globalFunc(){
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}
globalFunc();

function myname(){
    var name ="darshan";
    if(true)
{
    let age =20;
    const pi =3.14;
    console.log(age);
    console.log(pi);
}
   console.log(name);
}
myname();

//lexical soping
function outer(){
    let college ="uniglobe";
    console.log("outer function:",college);
    function inner(){
        console.log("inner function:",college);

    }
    inner();
}
outer();