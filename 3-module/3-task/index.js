/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let strArr = str.split('-');
  let camelArr = strArr.map(function (arrItem, index) {
  if (index == 0) {
    return arrItem;
    } else {
      return arrItem[0].toUpperCase() + arrItem.slice(1);
    }
  });
  return str = camelArr.join('');
}
