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