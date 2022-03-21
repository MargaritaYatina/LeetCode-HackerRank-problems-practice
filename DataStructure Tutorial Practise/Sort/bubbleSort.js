function bubbleSort(arr){
    let noSwap;
    for(let i = arr.length; i>0; i--){
        noSwap=true;
        for(let j = 0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                noSwap=false;
            }
        }
    }
    return arr;
}

console.log(bubbleSort[4,2,6,1,8,9]);