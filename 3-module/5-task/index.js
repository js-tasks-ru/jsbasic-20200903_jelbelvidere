/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let objCache = [];
  let objectMaxMin = {};
  
  let data = str
    .split(/,| /)
    console.log(data);

  data
    .map((item) => {return +item})
    .forEach((item) => {if (!isNaN(item)) {objCache.push(item)}})

  return objectMaxMin = {
    min: Math.min(...objCache),
    max: Math.max(...objCache),
  };
}