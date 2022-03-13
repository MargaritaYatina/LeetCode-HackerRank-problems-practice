//Given two positive integers, find out if the two numbers have
//the same frequency of digits.
// Solution must be in O(N)
//sameFrequency(181, 281) returns true
// sameFrequency(34,14) returns false


function sameFrequency(a,b){
// first solution
//     //return false if length is diffrent
//     let str1 = a.toString();
//     let str2= b.toString();
//     if(str1.length!=str2.length) return false;
    
//     for (let i=0; i<str1.length; i++){
//         let correctIndex = str2.indexOf(str1[i]);
//         if(correctIndex === -1){
//             return false;
//         }
//         str2.slice(correctIndex);
//     }
//     return true;

// }



//second solution using object
    let str1 = a.toString();
    let str2= b.toString();
    if(str1.length!=str2.length) return false;

    let lookup ={};
    for (let i =0; i<str1.length; i++){
        let digit = str1[i];
        lookup[digit] ? lookup[digit] +=1 : lookup[digit] =1;
    }

    for (let i=0; i<str2.length; i++){
        let digit = str2[i];
        if (!lookup[digit]){
            return false;
        }
        else{
            lookup[digit] -=1;
        }
    }
    return true;

}


console.log(sameFrequency(124, 4112));