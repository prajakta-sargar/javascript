
//square of EACH array elements using map method
// The map() method creates a new array populated with the results of calling a provided
//  function on every element in the calling array.
// The map() method does not execute the function for empty elements.
// The map() method returns a new array, it does not change the original array.
// The map() method is a higher-order function that takes a callback function as an argument 
// and applies it to each element of the array, returning a new array with the results.
// The map() method is a built-in method of the Array prototype in JavaScript. 
// It is used to create a new array by applying a function to each element of an existing array. 
// The original array remains unchanged.
// The map() method is a powerful tool for transforming data in JavaScript.
//  It allows you to apply a function to each element of an array and create a new array with the results. This is particularly useful when you want to perform operations on each element of an array without modifying the original array.

const arrayNum = [2, 3, 4, 5, 6, 9, 1];

const array = arrayNum.map((element)=>{

    return element * element;

});

console.log(array);




