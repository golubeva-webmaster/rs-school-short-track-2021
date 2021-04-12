/**
 * Given an email address, return it's dogPosition.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmaildogPosition(email) {
  const arr = email.split('@');
  const dogPosition = email.length - arr[arr.length - 1].length;
  return email.slice(dogPosition);
}

module.exports = getEmaildogPosition;
