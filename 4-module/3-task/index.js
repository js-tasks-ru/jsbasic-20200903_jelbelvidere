/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tableCollection = table.lastElementChild.rows;
    


    for (let tableRow of tableCollection) {
        console.log(tableRow)
        let arrayOfRows = tableRow.children
        console.log(arrayOfRows)

        //проверка на возраст
        for (let i = 0; i < arrayOfRows.length; i++) {
        if (+arrayOfRows[1].innerHTML < 18) {
            tableRow.classList.add("style");
            tableRow.style="text-decoration: line-through";
            }
        }
        for (let tableData of tableRow.cells) {

            console.log(tableData.innerHTML)
            
                    //Проверка на пол
                if (tableData.innerHTML === "m") {
                    tableRow.classList.add("male");
                }
                    //Проверка на пол
                if (tableData.innerHTML === "f") {
                    tableRow.classList.add("female");
                }

                //Проверка статуса
            if (tableData.hasAttribute("data-available")) {
                
                if (tableData.getAttribute("data-available") == "true") {
                    tableRow.classList.add("available");
                } else {
                    tableRow.classList.add("unavailable");
                } 
            }

        }//конец итерации td

        if (tableRow.classList.contains('available') || tableRow.classList.contains('unavailable')) {
   
        } else {tableRow.setAttribute('hidden', "true")}
    } 
}