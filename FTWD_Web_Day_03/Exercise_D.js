/**********************************************
 * Exercise D
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/** Write a function that expects a number as a parameter. 
 * If the number that is entered is less than 0, equal to 0, or not a number, 
 * the function should return the string ‘ERROR’. If the number that is entered 
 * is greater than or equal to 1000000 it should simply return the number. 
 * Otherwise it should multiply the number by 10 however many times it takes 
 * to get a number that is greater than or equal to 1000000 and return that number. 
 * Consider which loop you will need to use to do this.
Use a combination of conditionals and loops to create your answer for this question. */

function multiplyNumber(number) {
  if (number <= 0 || typeof (number) !== "number") {
    return "ERROR"
  }
  else if (number >= 1000000) {
    return number
  }
  else {
    while (number < 1000000) {

      number = number * 10
    }
    return number
  }
}

console.log(multiplyNumber(500));

