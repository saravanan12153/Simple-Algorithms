// ---question 1---
/*
Create a function that accepts a number as an input parameter.
Return an array that counts down by one, from the number (as the array’s
first element) down to 0 (as the last element).  How long is this array?
*/

function eQuestOne(numb){
  var countDown = [];
  if (Math.abs(Math.floor(numb)) === numb){
    for (var u = numb; u>=0; u--){
      countDown.push(u);
    }
  } else {
    /* I noticed that only positive integers fulfill the intent of the problem. */
    return "Input must be a positive integer.  Please try again.";
  }
  return countDown;
}
/*
console.log(eQuestOne(5));
would log '[5,4,3,2,1,0]'
The array will be (numb+1) in length.
*/
