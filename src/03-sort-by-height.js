/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Все эл-ты, которые не -1 - записать в массив arrTmp
  // Все позиции не -1 записать в массив arrPositivPos
  const arrTmp = [];
  const arrPositivPos = [];
  const arrRes = [];
  arr.forEach((el, index) => {
    if (el !== -1) {
      arrTmp.push(el);
      arrPositivPos.push(index);
    }
    arrRes.push(-1);
  });
  // упорядочить arrTmp
  function compareNumeric(a, b) {
    return (a < b) ? -1 : 1;
  }
  arrTmp.sort(compareNumeric);
  // разместить эл-ты из arrTmp по позициям из arrPositivPos массива arr

  arrPositivPos.forEach((el) => {
    // вырезать первый эл-т из arrTmp
    const tmp = arrTmp.splice(0, 1);
    arrRes[el] = tmp.join('');
  });
  return arrRes;
}

module.exports = sortByHeight;
