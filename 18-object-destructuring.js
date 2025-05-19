// object destructuring
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.
// It is a convenient way to extract multiple properties from an object or array
//  and assign them to variables in a single statement.




const student = {

    name: "Jenny",

    city: "Pune",

    age: 24,

    pin: 411057,

    country: "India",

    isMarried: true

}


//let { name, city, age, country, isMarried} = student;

//console.log(name, city,age,country, isMarried);




let { name, city, age, country="USA", isMarried, marks=0} = student;

console.log(name, city,age,country, isMarried);

console.log(marks);
 





