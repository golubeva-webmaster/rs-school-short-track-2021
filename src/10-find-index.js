/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  // половинное деление
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);
    const middle = array[middleIndex];
    if (middle === value) {
      return middleIndex;
    }
    if (middle > value)end = middleIndex - 1;
    else start = middleIndex + 1;
  }
  return null;
}
module.exports = findIndex;
