
function selectionSearch(arr){
    let minVal;
    let indOfMin;
    const swap =(arr,ind1, ind2)=>
        ([arr[ind1],arr[ind2]]=[arr[ind2], arr[ind1]]);

    
    
    
    for(let i=0; i<arr.length; i++){
        minVal =arr[i];
        for(let j=i; j<arr.length; j++){
            if(minVal>arr[j]) {
                minVal=arr[j];
                indOfMin = j;
                console.log('minVal = ' + minVal);
            }
            
        }
        
        if(indOfMin!=i){
            swap(arr,indOfMin, i)
        }

        

    }
    return arr;

}

console.log(selectionSearch([4,7,1,8,3,2,2]));