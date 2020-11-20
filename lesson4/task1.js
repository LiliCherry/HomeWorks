// Написать функцию которая генерирует массив случайных значений, таким
// образом что все элементы результирующего массива являются уникальными.
// Генерациями происходит в рамках чисел от N до M, где N,M - могут быть как
// положительные так и отрицательными, и еще одним параметром количество
// значений которые нужно сгенерировать. Если количество генерируемых
// значений больше чем чисел в диапазоне - отдавать пустой массив.

var n = -5;
var m = 5;
var length = 10;

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
}

logRandomArray();
