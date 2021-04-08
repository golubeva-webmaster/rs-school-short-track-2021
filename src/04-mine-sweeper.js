/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const ilen = matrix.length - 1;
  const jlen = matrix[0].length - 1;
  let arStr = [];
  const arRes = [];

  function upCounter(ii, jj) {
    let flag = false;
    if (ii >= 0 && ii <= ilen && jj >= 0 && jj <= jlen) {
      if (matrix[ii][jj]) {
        flag = true;
      }
    }
    return flag;
  }

  for (let i = 0; i <= (matrix.length - 1); i++) {
    arStr = [];
    for (let j = 0; j <= (matrix[i].length - 1); j++) {
      let counter = 0;
      if (upCounter(i - 1, j)) {
        counter++;
      }
      if (upCounter(i - 1, j - 1)) {
        counter++;
      }
      if (upCounter(i - 1, j + 1)) {
        counter++;
      }
      if (upCounter(i, j - 1)) {
        counter++;
      }
      if (upCounter(i, j + 1)) {
        counter++;
      }
      if (upCounter(i + 1, j)) {
        counter++;
      }
      if (upCounter(i + 1, j - 1)) {
        counter++;
      }
      if (upCounter(i + 1, j + 1)) {
        counter++;
      }

      arStr.push(counter);
    }
    arRes.push(arStr);
  }

  return arRes;
}

module.exports = minesweeper;
