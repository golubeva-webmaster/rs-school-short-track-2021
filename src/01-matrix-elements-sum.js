/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  // for (let i = 0; i <= (matrix.length - 1); i++) {
  //   console.log('-------');
  //   console.log(matrix[i]);
  // }

  for (let i = 0; i <= (matrix.length - 1); i++) {
    for (let j = 0; j <= (matrix[i].length) - 1; j++) {
      let flag = false;
      if (i === 0) {
        sum += matrix[i][j];
      } else {
        // Если в столбце выше есть 0 - не суммируем
        for (let k = i - 1; k >= 0; k--) {
          if (matrix[k][j] === 0) {
            flag = true;
            break;
          }
        }
        if (!flag) sum += matrix[i][j];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
