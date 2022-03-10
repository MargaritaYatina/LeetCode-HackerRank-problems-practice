//function accepts a sorted array of integers. 
//The function should find the pairs where the sum is 0.
//Return an array that includes both values that sum to zero
//or undefined if a pair doesnt exist
//sumZero([-3,-2,-1,0,1,2,3]) returns [-3,3]
//sumZero([-2,0,1,3]) returns undefined
//sumZero([1,2,3]) returns undefined

function sumZero(arr){
    let start = 0;
    let end = arr.length-1;
    while (start<end){
        if (arr[start]+arr[end]==0){
            return [arr[start], arr[end]];
        }
        else if (arr[end]>0){
            end -=1;

        }
        else {
            start +=1;
        }
    }
}

console.log(sumZero([-3,-1,2,3,4]));