var plusOne = function(digits) {
    
    let carry = 0;
    for (let i = digits.length - 1 ; i >= 0; i--){
        carry = (digits[i] + 1 == 10)? 1 : 0;
        if (carry == 0){
            digits[i] = digits[i] + 1;
            break;
        }else{
            digits[i] = 0 ; 
        }
    }
    if (carry == 1){
        digits.unshift(1);
    }
    return digits;
};

plusOne([1,2,3,7,8,9,9,9,8,8,9,7,6,7,8,7,8,7,8,7,8,7]);