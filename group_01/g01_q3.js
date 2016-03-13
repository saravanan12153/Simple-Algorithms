// ---question 3---
/*
Build a function that accepts an array of numbers as an input parameter.
Add 7 to every value in the array, and return the array.
*/

function eQuestThree(arryThree){
  for (var u = 0; u < arryThree.length; u++){
    arryThree[u] = arryThree[u]+7;
  }
  return arryThree;
}
/*
console.log(eQuestThree([1,2,3]));
would log '[8,9,10]'
*/
