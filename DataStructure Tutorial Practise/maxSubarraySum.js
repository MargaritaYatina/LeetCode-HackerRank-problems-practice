//function accepts an array of integers and a number. 
//The function should calculate the maximum sum of n consecutive
//elements in the erray
//maxSybarraySum([1,2,5,2,8,1,5],2) returns 10
//maxSybarraySum([1,2,5,2,8,1,5],4) returns 17
//maxSybarraySum([],4) returns null

function maxSubarraySum (arr, num){
    if(arr.length<num){
        return null;
    }
    let temp=0;
    let maxSum =0;
    for(let i=0; i<num; i++){
        temp +=arr[i];
    }
    maxSum=temp;
    for(let i=num; i<arr.length; i++){
        temp =maxSum-arr[i-num]+arr[i];
        maxSum =Math.max(maxSum,temp);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));

