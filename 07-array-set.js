const mySet = new Set();

mySet.add(10);

mySet.add(20);

mySet.add(10);

mySet.add(40);

console.log(mySet);

console.log(`Size: ${mySet.size}`);

mySet.delete(40);

console.log(mySet);

 

console.log(`Is 10 Available : ${mySet.has(10)}`);



//travercing

console.log(`Traversing`);

for (const element of mySet) {

    console.log(element);

}



console.log("====== Remove Duplicate elements =======");

const array = [10, 20, 30, 20, 10, 50, 90];

console.log(array);

const newArray = [...new Set(array)]

console.log(newArray);