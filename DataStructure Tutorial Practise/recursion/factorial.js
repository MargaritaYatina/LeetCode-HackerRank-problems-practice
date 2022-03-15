//function accepts a number and returns the factorial of that number.
//A factorial is the product of an integer and all the integers
//bellow it; e.g.,
//factorial four (4!) is equal to 24, becaise 4*3*2*1 =24
//factorial 0 is always 1.

function factorial(num){
    if(num ===0) return 1;
    return num *factorial(num-1);
}

console.log(factorial(4));