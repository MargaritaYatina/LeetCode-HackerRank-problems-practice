
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
