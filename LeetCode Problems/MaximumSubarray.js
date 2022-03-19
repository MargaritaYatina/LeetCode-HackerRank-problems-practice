// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray 
//(containing at least one number) which has the largest sum and return
// its sum.
// A subarray is a contiguous part of an array.
//Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:
// Input: nums = [1]
// Output: 1

var maxSubArray = function(arr) {
    
    var sum =0
    var max = 0;
        for(var i=0; i< arr.length; i++){
            sum += arr[i];
            if(sum > max || i == 0) max = sum;
            if(sum < 0) sum =0; // if the sum goes below zero, reset the sum to zero as it start counting from next item.
        }

        return max;
}
console.log(maxSubArray([-2,-1,-3,-4,-1,-2,-1,-5,-4]));