/**
 * @param {number} num
 * @return {string}
 */

// faster solution solution
function intToRoman(num) {
  let output = "";
  let symbols = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  for (let i = Object.keys(symbols).length - 1; i >= 0; i--) {
    if (num >= Object.keys(symbols)[i]) {
      output += Object.values(symbols)[i].repeat(
        Math.floor(num / Object.keys(symbols)[i])
      );
      num = num % Object.keys(symbols)[i];
    }
  }

  return output;
}

console.log(intToRoman(1994));
