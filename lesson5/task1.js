// Задан двумерный массив - объединить каждый внутренний массив с верхнем
// массивом - только по уникальным значениям. Например
// [1,2,4[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3], получаем в результате:
// [1,2,4,8,12,13,29,11,0,5,3,11,6,7,21]

var array = [1, 2, 4, [8, 4, 12], [13, 29, 11], [0, 5, 3, 11], 5, 6, 7, [3, 8, 21], 3];

var newArray = [];

function checkArrayIncludesElement(arrayToCheck, elementToCheck) {
    var result = true;
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

console.log(newArray);
