// ---question 5---
/*
Print out all the numbers from 1 to 100.  If the number is evenly divisible
by 5, print “Thunder” instead of the number.  If the number is evenly divisible
by 10, print “Cats” instead of the number.
*/
/*All numbers divisible by 10 will be divisible by 5.  If reading this like a
computer, you'd never write Cats, because it would kick-out.  Or, if re-ordered
slightly, it would reassign 'Thunder' to 'Cats', or even possibly print
'Thunder Cats', but I'm not reading that from the rhetoric.  My solution will
use being divisible by 10 to trump being divisible by 5 and print 'Cats' instead
of 'Thunder'.*/
function eQuestFive(){
  for (var u=1; u<=100; u++){
    if ((u%10)===0){
      console.log('Thunder');
    } else if ((u%5)===0){
      console.log('Cats');
    } else {
      console.log(u);
    }
  }
}
//Thank you for reading! They will get more challenging in the future!
//Bob Snyder
