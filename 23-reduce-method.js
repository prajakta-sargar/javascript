
//reduce method
// The reduce() method executes a reducer function (that you provide) on each element of the array, 
// resulting in a single output value.

const array = [4, 9, 6, 5, 3, 8, 1];

const sum = array.reduce( (runningTotal, element)=>{

    return runningTotal + element;

}, 0);

console.log(sum);

 

const multiplication = array.reduce( (runningTotal, element)=>{

    return runningTotal * element;

}, 1);

console.log(multiplication);



// find the sum of even numbers in an array using filter and reduce method

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The reduce() method executes a reducer function (that you provide) on each element of the array,
// resulting in a single output value.
// The filter() method does not execute the function for empty elements.
// The reduce() method executes the function for each element in the array, excluding empty elements.
// The filter() method returns a new array, whereas the reduce() method returns a single value.
// The filter() method does not change the original array,
//  whereas the reduce() method does not change the original array.

const arrayOne = [4, 9, 6, 5, 3, 8, 1];

// Sum the even numbers

// const evenArray = arrayOne.filter((element)=>{

//     return element%2==0;

// });

// const sumEven = evenArray.reduce( (runningTotal, element)=>{

//     return runningTotal + element;

// }, 0);

// console.log(sumEven);



const sumEven = arrayOne.filter((element)=>{

    return element%2==0;

}).reduce( (runningTotal, element)=>{

    return runningTotal + element;

}, 0);

console.log(sumEven);



// find avrage marks of students using reduce method...
const marks = [85, 90, 78, 92, 88];

const total = marks.reduce((accumulator, current) => accumulator + current, 0);
const average = total / marks.length;

console.log("Average Marks:", average);