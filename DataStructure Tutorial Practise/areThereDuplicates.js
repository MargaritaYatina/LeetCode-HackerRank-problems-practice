//check whether there are any duplicates among the arguments 
//passed in. You can solve this using the frequency counter pattern OR the multiply pointer pattern.
//areThereDuplicates(1,2,3) returns false
//areThereDuplicates(1,2,2) returns true

function areThereDuplicates(arr){
    //sort array
    arr.sort();
    let start =0;
    let next =1;
    while (arr[next]<arr.length){
        if (arr[start]===arr[next]){
            return true;
        }
        start++;
        next++;
    }
    return false;

}

console.log(areThereDuplicates([1,2,3]));