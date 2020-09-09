/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lowStr = str.toLowerCase();
  return lowStr.includes('xxx') || lowStr.includes('1xbet') ? true : false;
}
