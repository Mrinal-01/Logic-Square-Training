// Callbacks
// For JavaScript to know when an asynchronous operation has a result (a result being either returned data or an error that occurred during the operation), it points to a function that will be executed once that result is ready. This function is what we call a "callback function". Meanwhile, JavaScript continues its normal execution of code. This is why frameworks that does external calls of different kinds have APIs where you provide callback functions to be executed later on.


// Promises
// A promise is an object that wraps an asynchronous operation and notifies when it's done. This sounds exactly like callbacks, but the important differences are in the usage of Promises. Instead of providing a callback, a promise has its own methods which you call to tell the promise what will happen when it is successful or when it fails. The methods a promise provides are "then(…)" for when a successful result is available and "catch(…)" for when something went wrong.

// Async/Await
// Async/Await is a language feature that is a part of the ES8 standard. It was implemented in version 7.6 of NodeJs. If you are new to JavaScript this concept might be a bit hard to wrap your head around, but I would advise that you still give it a try. You don't have to use it if you don't want to. You will be fine with just using Promises.
// Async/Await is the next step in the evolution of handling asynchronous operations in JavaScript. It gives you two new keywords to use in your code: "async" and "await". Async is for declaring that a function will handle asynchronous operations and await is used to declare that we want to "await" the result of an asynchronous operation inside a function that has the async keyword.