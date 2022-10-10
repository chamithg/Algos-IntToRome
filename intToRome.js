/**
 * @param {number} num
 * @return {string}
 */

// works but slow.
function intToRoman(num) {
  let integer = num;
  let string = "";

  while (integer >= 1000) {
    console.log("hell");
    integer -= 1000;
    string += "M";
  }
  while (integer >= 900) {
    integer -= 900;
    string += "CM";
  }

  while (integer >= 500) {
    integer -= 500;
    string += "D";
  }
  while (integer >= 400) {
    integer -= 400;
    string += "CD";
  }

  while (integer >= 100) {
    integer -= 100;
    string += "C";
  }
  while (integer >= 90) {
    integer -= 90;
    string += "XC";
  }

  while (integer >= 50) {
    integer -= 50;
    string += "L";
  }

  while (integer >= 40) {
    integer -= 40;
    string += "XL";
  }

  while (integer >= 10) {
    integer -= 10;
    string += "X";
  }

  while (integer >= 9) {
    integer -= 9;
    string += "IX";
  }

  while (integer >= 5) {
    integer -= 5;
    string += "v";
  }
  while (integer >= 4) {
    integer -= 4;
    string += "IV";
  }
  while (integer >= 1) {
    integer -= 1;
    string += "I";
  }

  return string;
}

num = 1994;

console.log(intToRoman(num));
