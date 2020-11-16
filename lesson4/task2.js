var n = -5;
var m = 5;
var length = 10;

var positiveValues = 0;
var negativeValues = 0;
var zeros = 0;
var allValues = 0;

function calculateValueRelations(randomArray) {
    for (var i = 0; i < randomArray.length; i++) {
        var element = randomArray[i];
        if (element > 0) {
            positiveValues += 1;
        }
        if (element < 0) {
            negativeValues += 1;
        }
        if (element === 0) {
            zeros += 1;
        }
        allValues += 1;
    }

    var procentPositiveValues = positiveValues / allValues * 100;
    var procentNegativeValues = negativeValues / allValues * 100;
    var procentZeros = zeros / allValues * 100;

    console.log('Процент положительных чисел в массиве: ' + procentPositiveValues + '%');
    console.log('Процент отрицательных чисел в массиве: ' + procentNegativeValues + '%');
    console.log('Процент нулей в массиве: ' + procentZeros + '%');
}

function logRandomArray() {

    var moduleOfN = n;
    var moduleOfM = m;
    if (moduleOfN < 0) {
        moduleOfN *= -1;
    }
    if (moduleOfM < 0) {
        moduleOfM *= -1;
    }

    var range = moduleOfN + moduleOfM;

    var randomArray = [];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    if (length <= range) {
        while (length - randomArray.length > 0) {
            var randomValue = getRandomInt(n, m);
            var exist = false;
            for (var i = 0; i < randomArray.length; i++) {
                var element = randomArray[i];
                if (randomValue === element) {
                    exist = true;
                }
            }

            if (!exist) {
                randomArray.push(randomValue);
            }
        }
    }

    console.log(randomArray);
    calculateValueRelations(randomArray);
}

logRandomArray();
