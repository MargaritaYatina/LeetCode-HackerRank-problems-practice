/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    
    var mySqrt = function(x) {
        let left = 1;
        let right = x;
        let mid;
        //the square root of 1 or 0 is itself
        if(x<2) return x;
       
        //binsary search
        while (left < right){
            mid = Math.trunc((left+right)/2);
            
            if (mid*mid ==x){
                return mid;
            }
            else if(mid*mid>x){
                right =mid;
            }
            else left =mid+1
        }
        return left-1 ;
        
    };
   
};

console.log(mySqrt(2147395599));
