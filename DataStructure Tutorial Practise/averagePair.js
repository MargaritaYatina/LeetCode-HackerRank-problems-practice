//given a sorted array of integers and target average, determine if
//there is a pair of values in the array where the average of the pair 
// equals the target average. There may be more than onepair that
// matches the average target.
// averagePair([1,2,3], 2.5) returns true
// averagePair([1,3,3,5,6,7,10,12,19], 8) returns true
// averagePair ([], 4) returns falls

function averagePair(arr, target){
    let start =0;
    let end = arr.length-1;
    while(end>length){
        let average = (arr[start]+arr[end])/2;
        if(average ===target){
            return true;
        }
        else if (average < target){
            start++;
        }
        else{
            end--;
        }

    }
    return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));