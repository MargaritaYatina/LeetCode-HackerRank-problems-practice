function insertionSort(arr){
    let temp;

    for(let i=1; i<arr.length; i++){
        if(arr[i]<arr[i-1]){
            for(let j=i-1; j>=0; j--){
                if(arr[j]>arr[j+1]){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    console.log(arr);
                }
                
            }
        }
       
    }
    return arr;
   
}

console.log(insertionSort([3,4,1,9,6,7,6]));
