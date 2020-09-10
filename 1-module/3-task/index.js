/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let firstLetter = str.charAt(0); //if (firstLetter.startsWith(" ")) {}
  return firstLetter.toUpperCase() + str.slice(1);
}