/*write a fxn to take number btw 0 to 9 and return in words.*/

const numberToWord = (num) => {
  switch (num) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Invalid Number";
  }
};
console.log(numberToWord(7));

/*create another fxn that takes a number and show in words with the help of towords fxn*/
const rollNum = "2503201000230";
const digits = String(rollNum).split("");
console.log(digits);
let inWords = "";

digits.forEach((d) => {
  inWords += " " + numberToWord(Number(d));
});
console.log(inWords);
