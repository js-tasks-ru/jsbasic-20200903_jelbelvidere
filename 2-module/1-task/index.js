/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let sum = 0;
    //перебираем ключи
    for (let key in salaries) {
      //если тип = number то true
    if (typeof salaries[key] === "number") {
      // если true, то делаем сумму
      sum += salaries[key];
      }
    }
    return sum;
}
