function isEven(num){

    var result = num%2; 
 
    console.log(`Reminder is: ${result}`);
 
    console.log(`Reminder 0 means: EVEN, or it is ODD: ${result}`);
 
 }
 
 isEven(5);


     //Ternary Operator


// The ternary operator is a shorthand way of writing an if-else statement.
// It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.
// The syntax is: condition ? valueIfTrue : valueIfFalse
// In this example, we check if the number is even or odd using the ternary operator.
// If the number is even (num % 2 == 0), we assign "EVEN" to the result variable; otherwise, we assign "ODD".
// Finally, we log the result to the console.




 function isEven(num){

    console.log(`====== Ternary Operator ======`);
 
    var result = num%2==0 ? "EVEN" : "ODD";
 
    console.log(`Given number ${num} is ${result}`);
 
 }
 
 isEven(5);
 isEven(10);


 console.log(`==== Number is Positive or Negative =====`);

function isPositive(num){

    var result = num > 0 ? "Positive" : "Negative";

    console.log(`Given number ${num} is ${result}`);

}

isPositive(7);

// logical operator
// Logical operators are used to combine two or more conditions in JavaScript.
// The most common logical operators are AND (&&), OR (||), and NOT (!).
// In this example, we check if a number is both positive and even using the AND operator (&&).
// If both conditions are true, we assign "Positive and Even" to the result variable; otherwise, we assign "Not Positive and Even".
// Finally, we log the result to the console.
