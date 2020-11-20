// Написать рекурсивную функцию которая выводит абсолютно все элементы
// ассоциативного массива (объекта) - любого уровня вложенности.

var object = { 1: 'Hello, World!', a: { 2: 222 }, b: { 3: 333, c: { 4: 444 } } };

function logObjectFieldsRecursive(objectToLog) {
    var objectFields = Object.values(objectToLog);
    for (i = 0; i < objectFields.length; i++) {
        var element = objectFields[i];
        if (typeof element === 'object') {
            logObjectFieldsRecursive(element);
        } else {
            console.log(element);
        }
    }
}

logObjectFieldsRecursive(object);