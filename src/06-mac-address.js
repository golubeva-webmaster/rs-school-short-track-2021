/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let count = 0;
  const arr = n.split('-');
  arr.forEach((el) => {
    if (el.match(/([0-9a-fA-F]{2})/g) && el.length === 2) {
      count++;
    }
  });
  return (count === arr.length);
}

module.exports = isMAC48Address;
