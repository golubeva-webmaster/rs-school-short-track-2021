/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesRes = [];
  const index = {};
  if (names.length) {
    names.forEach((el, ind) => {
      if (el in index) {
        namesRes.push(`${el}(${index[el]})`);
        index[`${el}(${index[el]})`] = 1;
        index[el]++;
      } else {
        namesRes.push(el);
        index[el] = 1;
      }
    });
  }
  return namesRes;
}

module.exports = renameFiles;
