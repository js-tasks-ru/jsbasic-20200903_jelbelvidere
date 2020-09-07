/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n === 0) {
    return (n = 1);
  } else {
    for (m = (n - 1); m >= 1; --m * n) {
      n = n * m;
    }
  }
  return (n);
}
