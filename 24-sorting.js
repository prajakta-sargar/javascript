 // Sorting in ascending order 
// Sorting in descending order  tevhach kele jate jeva array ha sort asto...
// ani asending order madhe sort karaycha asel tar array.sort() madhe reverse() method vaprava lagto
// ani descending order madhe sort karaycha asel tar array.sort() madhe reverse() method vaprava lagto
// mhnjech ascending order cha arry la reverse() method vaprava lagto


const frdList = ["Jenny", "Stew", "Bill", "Elon"];

frdList.sort(); // Sorting in ascending order
frdList.reverse(); // 

console.log(frdList);



const arrayNum = [9, 4, 11, 31, 81, 250];

// arrayNum.sort(); // Sorting 

arrayNum.sort((a,b)=>{

    return a>b? 1: -1;

});

console.log(arrayNum);

// arrayNum.reverse();


//reverse & sort in descending order
// Sorting in descending order  tevhach kele jate jeva array ha sort asto...
const arayNum = [9, 4, 11, 31, 81, 250];

// arrayNum.sort(); // Sorting 

arayNum.sort((a,b)=>{

    return a>b? -1: 1;

});

console.log(arayNum);

// arrayNum.reverse();