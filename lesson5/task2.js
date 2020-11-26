// Написать функцию которая возвращает true/false в зависимости от того - все ли
// уникальные значения в массиве или есть не уникальные

var array = [5, 4, 6, 6, 7];

var newArray = [];


function main() {
    var result = true;
    function checkArrayIncludesElement(arrayToCheck, elementToCheck) {
        for (k = 0; k < arrayToCheck.length; k++) {
            var element = newArray[k];
            if (element === elementToCheck) {
                result = false;
                break;
            }
        }
        return result;
    }

    for (i = 0; i < array.length; i++) {
        var element = array[i];
        if (Array.isArray(element)) {
            for (j = 0; j < array[i].length; j++) {
                var elementArray = array[i][j];
                var a = checkArrayIncludesElement(array, elementArray);
                if (a) {
                    newArray.push(elementArray);
                }
            }
        } else {
            var a = checkArrayIncludesElement(array, element);
            if (a) {
                newArray.push(element);
            }
        }
    }
    console.log(result);
}

main();
