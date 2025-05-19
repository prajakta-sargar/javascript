// Filter method in JavaScript
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.



const arr = [2, 3, 4, 5, 6, 9, 1];

const arr1 = arr.filter((element)=>{
    return element%2==0; 
});
console.log(arr);
console.log("Even numbers in the array is: ");

console.log(arr1);



/// multiple of 5 by using filter method
const array = [7, 15, 20, 3, 25, 2, 40];
const array1 = array.filter((element )=> {
    return element % 5 == 0;
});
console.log("Multiple of 5 in the array is: ");
console.log(array1);
