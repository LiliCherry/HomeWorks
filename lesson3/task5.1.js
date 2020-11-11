var array = [
    [6, 3, 5, 12, 9],
    [5, 2, 3, 15, 2],
    [4, 1, 7, 07, 7],
];

function logMatrixColumnSummMaxValue() {

    function calculateMatrixColumnSumm() {
        var result = [];
        var n = 0;
        for (let i = 0; i < array[0].length; i++) {
            var tableSumm = 0;
            for (let index = 0; index < array.length; index++) {
                const element = array[index][n];
                tableSumm += element;
            }
            n++;
            result.push(tableSumm);
        }

        return result;
    }

    function determineMaxValue(summ) {
        var maxValue = 0;
        for (var i = 0; i < summ.length; i++) {
            var element = summ[i];
            if (maxValue < element) {
                maxValue = element;
            }
        }

        return maxValue;
    }

    var summ = calculateMatrixColumnSumm();
    var maxValue = determineMaxValue(summ);

    console.log(maxValue);
}

logMatrixColumnSummMaxValue();
