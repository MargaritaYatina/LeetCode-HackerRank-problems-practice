/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // remove non-alphanumerical characters and spaces 
    const regex = /[^A-Za-z0-9]/g;
    const newStr = s.replace(regex, "");
    //bring every elemt to lower case
    final = newStr.toLowerCase();

    lastIndexValue =final[newStr.length-1];
   

    if (final[0] != lastIndexValue){
       
      return false;
    }
   
    else if (final.length == 0){
       return true;
    }

    
    else {
       let reverse ="";
       for (let i= final.length-1; i>=0; i--){
          reverse = reverse + final[i];
       }
       if (reverse == final) {
          return true;
       }
       else {
          return false;
       }
       

   }
    
};

/**false: cases:
   
   remove space and non-alphanumeric characters
   convert to lower case
   
   if word[0]!=word[-1] 
      return false
      
   if the string empty
      return true
      
   create a new string = reverse of original string
   
   if original == reverse {
     return true
   }
   
   else {
    return false
   }
   
*/

isPalindrome("A man, a plan, a canal: Panama");
