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
  console.log('\nn: ', n, typeof n);
  let tmp = String(n);
  console.log('\ntmp: ', tmp, typeof tmp);
  // while (String(tmp).length !== 1) {
  // while (String(tmp).length !== 1) {
  tmp = tmp.split('').reduce((sum, current) => sum + current, 0);
  console.log('tmp: ', tmp, typeof tmp);
  // }
  return tmp;
}

module.exports = getSumOfDigits;
