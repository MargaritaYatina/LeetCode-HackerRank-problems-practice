/*

Given two arrays of chars, A and B, return an array that consists of the chars in array A excluding all occurrences of any char that appears in array B. 

Example 

A: my name is kevin 
B: ne
Output: my am is kvi 

*/

/* A[]  and B[]  Return A[] without char from B[]

/* Look at each char in B[] one at a time
    compare it to A[] by looping through it.
    remove matching char/element
    
    return aArray
*/

function excludeA(aArray, bArray) {
  //O(m(n))

  let bChar = "";

  for (var i = 0; i < bArray.length; i++) {
    bChar = bArray[i];

    for (var x = 0; x < aArray.length; x++) {
      if (bChar == aArray[x]) {
        aArray.splice(x, 1);
      }
    }
  }

  return aArray.toString();
}

//console.log(excludeA(Array.from("my name is kevin"),Array.from("ne")));
//console.log(excludeA(Array.from("ne"),Array.from("my name is kevin")));
console.log(excludeA(Array.from("my name is kevin"), Array.from("pbg")));
