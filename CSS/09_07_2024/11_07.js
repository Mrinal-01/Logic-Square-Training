// we save the function in a variable and we use the variable as function.
//Here we don't use any function name so its called a anonymous funnction.
let x=function(a,b){return a*b}

console.log(x(5,6));

//Function constructor
let myFun=Function('a','b','return a*b')
console.log(myFun(5,6));

//Hoisting is the default behaviour of JS where declaration move to the top of the current scope.
// In JS variable and method can be hoisted
//NOTE:- THE FUNCTION USING EXPRESSION ARE NOT BE HOISTED.

console.log(x(4,5));

// function testFunct(a,b){
//     return a*b
// }

x=function(a,b){return a*b}
console.log(typeof x);


//Self invokign function
// (function(){
//     console.log('Hello');
// })();

//arguments.length:- return number of arguments recieve when a function invoked
function testFunc(a,b){
    return arguments.length;
}
console.log(testFunc(4,5))



const f = (x, y=2) => x * y;
console.log(f(5));


//Resr Parameter:- (...)

const obj={
    fname:'Mrinal',
    lname:'Bera',
    fullName:function(){
        return this.fname+" "+this.lname
    }
}
console.log(obj.fullName());