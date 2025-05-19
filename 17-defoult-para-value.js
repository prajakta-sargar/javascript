// function with default parameter value
// default parameter value is used when the argument is not passed
// default parameter value is used when the argument is undefined
// default parameter value is used when the argument is null
// default parameter value is used when the argument is NaN
// default parameter value is used when the argument is 0
// default parameter value is used when the argument is false
// default parameter value is used when the argument is empty string
// default parameter value is used when the argument is empty array



function add(n1, n2=0, n3=0){

    console.log(n1+n2+n3);   

}

add(10, 5, 20);

add(90);