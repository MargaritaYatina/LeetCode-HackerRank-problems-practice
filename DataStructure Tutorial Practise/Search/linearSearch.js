function linearSearch(long,sh){
    let count =0;
    for(let i =0; i<long.length; i++){
        for(let j=0; j< sh.length; j++){
            if (long[i]!=sh[j]) break;
            console.log(long[i]);

        }
    }
    
   
}

console.log(linearSearch("abcfghgabcn","bc"));
