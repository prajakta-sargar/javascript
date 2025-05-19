let person = {

    name: "Jenny",

    age: 22,

    city: "Pune"

}

console.log(typeof person);

console.log(`====Accessing Properties ========`);

console.log(`Person Name: ${person.name}`);

console.log(`Person City: ${person["city"]}`);

console.log(`Person Age: ${person.age}`);


console.log(`==== Updating Properties ========`);

person.age = 30;

person.city = "Mumbai";

console.log(person);

 

console.log(`==== Deleting Properties ========`);

delete person.city;

console.log(person);

 

console.log(`==== After Object creation, Adding Properties ========`);

person.isMarried = true;

person.designation = "Developer";

console.log(person);



console.log("===== Traversing Objects =========");

for (const key in person) {

    if (Object.prototype.hasOwnProperty.call(person, key)) {

        const element = person[key];// person["name"]

        console.log(`${key} ==> ${element}`);

    }
}



console.log("==== Empty Objects =======");

let address = {

 

};