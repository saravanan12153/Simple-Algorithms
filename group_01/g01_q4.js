// ---question 4---
/*
Given an array of numbers, add 1 to every second element (arr[1], arr[3], etc).
After you have done this to the entire array, console.log each array value.
*/

function eQuestFour(arryFour){
  for (var u = 1; u < arryThree.length; u+=2){
    arryFour[u] = arryFour[u]+1;
  }
  for (var i = 0; i < arryFour.length; i++){
    console.log(arryFour[i]);
  }
  return arrayFour;
}

/*
console.log(eQuestFour([1,1,1,1,1,1,1]));
would log the following:
1
2
1
2
1
2
1
[1, 2, 1, 2, 1, 2, 1]
*/
