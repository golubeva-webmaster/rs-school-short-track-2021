/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objResult = {};
  domains.forEach((el) => {
    let clue = '';
    const tmpEl = el.split('.').reverse();
    tmpEl.forEach((elRev) => {
      clue = `${clue}.${elRev}`;
      if (clue in objResult) {
        objResult[clue]++;
      } else {
        objResult[clue] = 1;
      }
    });
  });
  return objResult;
}

module.exports = getDNSStats;
