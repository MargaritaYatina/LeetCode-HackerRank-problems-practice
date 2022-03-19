//Given an array of integers and a number, write a function
//which finds the maximum sum of a subarray with length of the number
//passed to the function.
//maxSubaaraySum([100,200,300,400], 2) returns 700
//maxSubaaraySum([1,4,2,10,23,3,1,0,20], 4) returns 39
//maxSubaaraySum([2,3], 3) returns null


function maxSubarraySum(arr,num){
    let i=0;
    let j=num-1;
    let temp =0;
   
    let maxSum = 0;
    let sum =0;
    if(num > arr.length) return null;
    for (let i=0; i<num; i++){
        temp += arr[i];
    }
    
   
    while( j< arr.length-1){
       
        sum = temp -arr[i]+ arr[j+1];
        console.log('sum is ' + sum);
        maxSum = Math.max(maxSum, sum);
        
        temp = sum;
        i++;
        j++;
    }
    return maxSum;


}

console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2));