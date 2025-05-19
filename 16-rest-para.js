// rest parameter
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// It is used in function declarations and can be used to create variadic functions.
// It is a way to handle an indefinite number of arguments in a function.



function add(...n){
    
    console.log(n);

}

add(2, 3, 4);

 

function add( n1, ...n2){

    console.log(n1);

    console.log(n2);

    

}

add(10, 20, 30);