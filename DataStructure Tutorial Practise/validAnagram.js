//function determines if the second string is an anagram 
//of the first. An anagram is a word, phrase, or name formed 
//by rearranging the letters of another, such as cinema,
// formed from iceman.
//validAnagram('','') returns true
//validAnagram('aaz','zza') returns false
//validAnagram('anagram','nagaram') returns true

function validAnagram (str1,str2){
    if(str1.length != str2.length){
        return false;
    }
    const lookup ={};
     for (let i=0; i< str1.length; i++){
         let letter = str1[i];
         lookup[letter] ? lookup[letter] +=1 : lookup[letter]=1;
        
    }
     console.log("string 1 is " );
     console.log(lookup);

     for (let i=0; i<str2.length; i++){
         let letter = str2[i];
         if(!lookup[letter]){
            console.log("false, final is ")
            console.log (letter, lookup);
            return false;
             
         }
         else{
             lookup[letter] -=1;
             console.log("string1 has letter" +" '" +letter +"' and new lookup is")
             console.log( lookup);
         }
     }
     return true;



    


}

//test
console.log(validAnagram("aaz","zaab"));