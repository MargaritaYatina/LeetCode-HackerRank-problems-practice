//function accepts a sorted array, and counts the unique 
//values in the array. There can be negative numbers
//in the array, but it will be always sorted.
//countUniqueValues([1,1,1,1,1,2]) returns 2
//countUniqueValues([-2,-1,-1,0,1]) returns 4


function countUniqueValues(arr){
    let left =0;
    let right =1;
    if (arr.length===0){
        return 0;
    }
    while(right<arr.length){
        if (arr[left]=== arr[right]){
            right++;
            
           

        }
        else{
            arr[left+1]=arr[right];
            left++;
            arr[left]=arr[right];
            right++

        }
    }
    return left+1;

}

console.log(countUniqueValues([]));
