//promise is a special object which is used to handle asynchronous operations in JavaScript.
// It is a way to handle asynchronous operations in JavaScript. It is a built-in object in JavaScript.
// It is used to handle asynchronous operations in JavaScript. It is a way to handle asynchronous operations in JavaScript.
// It is a built-in object in JavaScript. It is used to handle asynchronous operations in JavaScript.


let promise = new Promise(function(success, failure){

    //15success("Yes.. Jenny.. Let get married...");

    failure("Ohh... Jenny Sorry. I can't marry with you.. ");

});

promise.then(function(success){

    console.log(`======= Inside then() =====`);

    console.log(success);

})

.catch(function(failure){

    console.log(`======= Inside catch() =====`);

    console.log(failure);

})

.finally(function(){

    console.log('Finally....');
})