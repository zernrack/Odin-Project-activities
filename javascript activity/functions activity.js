// function that will add 7 
function add7(number) {
  return number + 7;
}

console.log(add7(8));

// function that will multiply 2 numbers
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(10, 2));

//Function that will capitalize first string only
function capitalize(string) {
  let word = string[0].toUpperCase() + string.slice(1).toLowerCase();
  return word;
}

console.log(capitalize("wasDef"));

// This function will return last letter of the string.
function lastLetter(str){
    let word = str.slice(-1)
    return word;
}

console.log(lastLetter('abcd'))