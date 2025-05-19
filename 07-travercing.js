const array = [2, 4, 5, 6, 9, 1];

for (let index = 0; index < array.length; index++) {

    const element = array[index];

    console.log(element);

}

console.log(`======= Sum the array elements ===========`);

let sum = 0;// 11

for (let index = 0; index < array.length; index++) {

    const element = array[index];

    sum = sum + element; // 6 + 5

    console.log(element);

}

console.log(` Sum of an array: ${sum}`);

console.log(`======= Even numbers from the array ===========`);

let arrayNum = [7, 2, 5, 8, 6, 4, 11];

for (let index = 0; index < arrayNum.length; index++) {

    const element = arrayNum[index];

    if (element%2==0) {

        console.log(element);

    }

}

console.log("======== for of loop==========");

let arrays = [7, 2, 5, 8, 6, 4, 11];

for (const element of arrays) {

    console.log(element);

}


// Traver array in reverce order
console.log(`======== Array reverse traversing=============`);

let arrayNumbers = [7, 2, 5, 8, 6, 4, 11];

for (let index = arrayNumbers.length-1; index >=0; index--) {

    const element = arrayNumbers[index];

    console.log(element);
}



console.log("======== join method==========");
let arrayJoin = [7, 2, 5, 8, 6, 4, 11];
let join = arrayJoin.join(" - ");
console.log(join); // 7 - 2 - 5 - 8 - 6 - 4 - 11


//CONCAT METHOD
//The concat() method is used to merge two or more arrays. It does not change the original arrays, 
//but instead returns a new array.
// The concat() method is used to join two or more arrays. This method returns a new array, without modifying any existing arrays.
// The concat() method can take any number of arguments, which can be arrays or values. If an argument is an array, its elements are added to the new array. If an argument is a value, it is added as a single element.
// The concat() method does not change the existing arrays, but instead returns a new array. This means that you can use the concat() method to create a new array that contains elements from multiple arrays, without modifying the original arrays.
// The concat() method is a useful way to combine arrays in JavaScript, and it can be used in a variety of situations where you need to merge or combine data from multiple sources.
// The concat() method is a built-in method of the Array object in JavaScript. It is used to join two or more arrays together, creating a new array that contains all the elements from the original arrays. The syntax for the concat() method is as follows:
// array1.concat(array2, array3, ..., arrayN)
// where array1 is the first array to be concatenated, and array2, array3, ..., arrayN are the arrays to be concatenated to it. The concat() method returns a new array that contains all the elements from the original arrays, in the order they were passed to the method.
// The concat() method does not modify the original arrays, but instead creates a new array that contains the combined elements. This means that you can use the concat() method to create a new array that contains elements from multiple arrays, without modifying the original arrays.

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let result = arr1.concat(arr2);
console.log(result); 