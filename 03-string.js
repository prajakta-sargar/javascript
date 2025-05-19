var greet =  "good morning";
var greetLenght = greet.length;
console.log("The length of the string is: " + greetLenght);

//console.log(greetLenght);


var lastChar =greet.charAt(11);
console.log("The last character of the string is: " + lastChar);

var lastCharSmartWay = greet.charAt(greetLenght - 1);
console.log("The last character using Smart Way is: " + lastCharSmartWay);

//concat method:
// it is used to concatenate two or more strings
// it does not change the original string
// it returns a new string
// it is used to join two or more strings
// it is similar to + operator

var strOne = "Hello";

var strTwo = " Good Morning";

var resultConcat = strOne.concat(strTwo);

console.log("String one: ", strOne, " String two: ", strTwo, " Concat Result: ",resultConcat );

console.log(` String one: ${strOne}, String two: ${strTwo}, Concat Result:${resultConcat}  `);

// String Template Backtick `, $, {}



// indexOf() method
// it returns the index of the first occurrence of the substring
// it does not change the original string
// it returns -1 if the substring is not found
// it is used to find the index of the substring in the string
// it is similar to lastIndexOf() method


var greet = "Good Morning";

var indexOfM = greet.indexOf("M");

console.log(`Index of char M: ${indexOfM}`);



//Replace() method
// it replaces the first occurrence of the substring with the new substring
// it does not change the original string
// it returns a new string
// it is used to replace the substring with the new substring
// it is similar to replaceAll() method


var replaceResult = greet.replace("Morning", "Evening");

console.log(`Replace result is: ${replaceResult}`);


/// Trim method()
// it removes the spaces from the start and end of the string
// it does not change the original string
// it returns a new string
// it is used to remove the spaces from the start and end of the string
// it is similar to trimStart() and trimEnd() methods


var city = "  Pune  ";

console.log(`Before trim: ${city}, and it's length: ${city.length}`);

var trimResult = city.trim();

console.log(`After trim: ${trimResult}, and it's length: ${trimResult.length}`);

 

console.log(` Count the total number of spaces available in the start and in the end `);

var totalSpaces = city.length - trimResult.length;

console.log(`Total spaces available: ${totalSpaces}`);



// TrimStart () METHOD
// it removes the spaces from the start of the string
// it does not change the original string
// it returns a new string
// it is used to remove the spaces from the start of the string
// it is similar to trim() method

var country = "   Unites States Of America  ";

var trimStartResult = country.trimStart(); // "Unites States Of America  "

console.log(` Total spaces available in the start is: ${country.length - trimStartResult.length}`);


// conversion of NUMBER to STRING
//use toString() method
// it converts the number to string
// it does not change the original number
// it returns a new string
// it is used to convert a number to string


var age = 22;

console.log(` Age ${age}, ${typeof(age)} `);

var ageString = age.toString();// "22"

console.log(` Age string: ${ageString}, data type: ${typeof(ageString)}`);



// INCLUDES() method
// it returns true or false
// it checks whether the string contains the given substring or not


var greet = "Good Evening";

var result = greet.includes("nin");

console.log(`Result of includes: ${result}`);




// slice() method
// it returns the part of the string from start index to end index -1
// it does not change the original string
// it returns a new string
// it takes two parameters: start index and end index
// it is similar to substring() method
// it is used to extract a part of the string
// it does not change the original string
// it returns a new string
var greet = "Good Evening";

var greetSlice = greet.slice(0,4);

console.log(`Slice 0, 4 : ${greetSlice}`);


// Split() method
// it is used to split a string into an array of substrings
// it takes a separator as a parameter
// it returns an array of substrings
// it does not change the original string
// it is used to split a string into an array of substrings


var city = "I love Pune";

var splitResult = city.split(" ");

console.log(splitResult);

 

var str = "My inspiration is Ratan Tata Sir";

var result = str.split(" ");

console.log(result);

console.log(`Total words: ${result.length}`);

