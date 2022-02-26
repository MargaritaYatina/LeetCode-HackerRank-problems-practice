/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    
    let arr =[];
    for (let i=0; i< x+1; i++){
        arr[i] =i;
    }
    console.log(arr);
    let l =arr.length;
    

    for (let i=arr.length; i>=0; i--){
        if (i*i<=x){
            return i;
        }
       
    }
   
};

console.log(mySqrt(2147395599));
