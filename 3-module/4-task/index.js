/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let sortedArrByAge = [];
  users.forEach(function(person) {
    //iteration for object
    if (person.age <= age) {
      //should to push to new array
      return (sortedArrByAge.push(person.name + ', ' + person.balance));
    }
  });
  //return new array
  return (sortedArrByAge.join('\n'));
}