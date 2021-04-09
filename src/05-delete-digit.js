/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const str = String(n);
  let construction = '';

  for (let i = 0; i < str.length; i++) {
    construction = str.substring(0, i) + str.substring(i + 1, str.length);
    arr.push(Number(construction));
  }

  let max = arr[0];
  arr.forEach((el) => {
    if (el > max) {
      max = el;
    }
  });

  return max;
}

module.exports = deleteDigit;
