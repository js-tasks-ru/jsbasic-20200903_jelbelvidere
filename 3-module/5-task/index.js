/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let fixedArrow = [];
  let objArray = [];
  let objectMaxMin = {};
  let newArr = [];
  let numericArray = [];
  
  newArr = str.split(/,| /);
  newArr.forEach((item) => {if (item !== "") {fixedArrow.push(item)}})
  numericArray = fixedArrow.map((item) => {return +item})
  numericArray.forEach((item) => {if (!isNaN(item)) {objArray.push(item)}})

  return objectMaxMin = {
    min: Math.min(...objArray),
    max: Math.max(...objArray),
  };
}