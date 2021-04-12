/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = 100;
  let str = n.toString();
  while (result > 9) {
    result = 0;
    for (let i = 0; i <= str.length - 1; i++) {
      result += parseInt(str[i], 10);
    }
    str = result.toString();
  }
  return result;
}

module.exports = getSumOfDigits;
