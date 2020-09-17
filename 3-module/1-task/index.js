/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let arrayNames = users.map(item => item.name); 
  return arrayNames;
}

