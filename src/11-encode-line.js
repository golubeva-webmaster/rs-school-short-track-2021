/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let letterRepeat = 1;
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      letterRepeat++;
    } else if (letterRepeat === 1) {
      result += arr[i];
    } else {
      result += letterRepeat + arr[i];
      letterRepeat = 1;
    }
  }
  return result;
}
module.exports = encodeLine;
