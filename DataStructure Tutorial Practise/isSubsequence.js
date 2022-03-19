//function takes in two strings and check whether the characters in 
//the first string form a subsequence of the characters in the second string.
//In other words, the function should check whether the characters in thefirst string appear somewhere 
//in the second string, without their order changing.
//isSubsequence('hello', 'hello world') returns true
//isSubsequence('sing', 'sting') returns true
//isSubsequence('abc', 'acb') returns false (order matter)

function isSubsequence(str1, str2){
    let i=0;
    let j=0;
    if (!str1) return true;
    while(j<str2.length){
        if(str1[i]===str2[j]){
            i++;
        }
        if(i===str1.length){
            return true;
        }
        j++;
    }
    return false;
    


}

console.log(isSubsequence('helln', 'hello world'));