/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // remove non-alphanumerical characters and spaces 
    let str =s.toLowerCase();
    let strng = str.replace(/[^A-Za-z0-9]/g,"");
    
    let left=0;
    let right = strng.length-1;
    while(left <right){
        if(strng[left] !=strng[right]){
            return false; 
        }
         left++;
         right--;   
    }
    return true;
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
