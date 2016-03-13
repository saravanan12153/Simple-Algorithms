// ---question 2---
/*
Write a function named sigma(num) that, given a number, adds all the integers
from 1 up to that number. Console.log the result.  Examples.: sigma(3) should
print 6 (or 1+2+3); sigma(5) should print 15 (or 1+2+3+4+5).
*/

function sigma(num){
  if (Math.abs(Math.floor(num)) === num){
    for (var u = num-1; u>=0; u--){
    num = num + u;
  /*I know I shouldn't mess with the original input, but this allows me
  to not have to create a new variable and the instance of variable 'num' will
  be lost after this function returns regardless, so I don't see any harm in
  writing over it.*/
    }
  } else {
    return "Input must be a positive integer.  Please try again.";
  }
  return num;
}
/*
console.log(sigma(5));
would log '15'
*/
