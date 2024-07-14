// function greet(){
//   console.log("Say Hello");
// }
// function sayHello(){
//   console.log("Welcome to code");
// }
// setTimeout(greet,4000)
// sayHello()


// Callback Function Example
function greet(name, myFunction) {
  console.log('Hello world');

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);
sayName("Mrinal")