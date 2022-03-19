//function accepts a base and an exponent. The function should return 
//the power of the base to the exponent. This function should mimic the 
//functionality of Math.pow() - dont worry about negative bases and exponents.
//power(2,0) returns 1
//power(2,2) returns 4
//power(2,4) returns 16
function power(base, exponent){
    if(exponent ===1){
        return base;
    }
    else if(exponent ===0){
        return 1;
    }
    return base * power(base, exponent-1);

}
 console.log(power(2,1));