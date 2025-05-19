
// CALLBACK FUNCTION
// A callback function is a function that is passed as an argument to another function.
// The function that receives the callback can execute it at any time, allowing for asynchronous 
// programming and event handling.
// Callbacks are often used in JavaScript to handle events, such as user interactions or server
//  responses.
// They are also used in asynchronous programming to handle the results of operations that may 
// take time to complete, such as network requests or file I/O.
// Callbacks are a fundamental concept in JavaScript and are widely used in libraries and frameworks.
// They allow for more flexible and modular code, as functions can be passed around



// Jenny - Home work preparation

// Home work completion

// Callback to Elon 

 

function jenny(callbacks){

    console.log(`==== Jenny went home and have snacks======`);

    console.log(`===== Jenny started home work preparation =========`);

    console.log(`===== After 2 hours she have completed her home work =======`);

    // Elon Callback

    callbacks();

}

// Elon - Playing Match

// Elon came back and started copying home work

//  Home work completion

let elon = function(){

    console.log(`******** Elon went home and have snacks ***********`);

    console.log(`******** Elon went to play match ***********`);

    console.log(`******** Elon came back and started copying homework ***********`);

    console.log(`******** Elon Completed his home work ***********`);

}

 

jenny(elon);

// SET TIME OUT
// setTimeout is a function that takes two arguments: a function to execute and a delay in milliseconds.
// It will execute the function after the specified delay.
// It is a way to delay the execution of a function.
// It is a built-in function in JavaScript.
// It is used to execute a function after a specified amount of time.


console.log(`====== setTimeout() ======`);

let show = function(){

    console.log(`== Inside show FE ===`);

}

 

setTimeout(show, 5000);