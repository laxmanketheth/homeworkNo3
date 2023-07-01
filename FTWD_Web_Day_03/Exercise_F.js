/**********************************************
 * Exercise F
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that takes two inputs: a string and a character.
 * The function will count the number of times that character appears in the string.
 * The count is case insensitive. */

function occurrence(string, targetChar) {
  // CODE HERE
  let counter = 0;
  for (let i = 0 ; i < string.length; i++) {
    if (string[i] == targetChar) {
       counter++ 
    }
   
  }
  return counter
}

console.log(occurrence("baababbba", "b"));
