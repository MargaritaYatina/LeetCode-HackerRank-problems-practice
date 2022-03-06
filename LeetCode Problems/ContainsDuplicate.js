
const containsDuplicate = function(nums) {
    for (let i=0; i<nums.length; i++){
        
         for (let j=i+1; j<nums.length; j++){
             
             if (nums[i]== nums[j]){
                 return true;
             }
        }
    }
    return false;
};

console.log(containsDuplicate("12"));

// 1st itteration:
// when i=0
// j=1 , nums[0] =1 
                 
   