//write a funtion to take number between 0 to 9 and return number in words.
const toWords = (digit) => {
  switch (digit) {
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
const towords2 =(digit)=>{
    const words = ["Zero", "One", "Two", "Three", "Four", "Five",
        "Six", "Seven", "Eight", "Nine"]
    
}

//console.log(toWords(5));
//console.log(toWords(3));
//console.log(toWords(7));

//crete another function that takes a number and shows
const rollNum = "250031000497";
const digits = String(rollNum).split("");
console.log(digits);
let inWords = "";
digits.forEach((d) => {
  inWords += toWords(Number(d)) + " ";
});
console.log(inWords);
