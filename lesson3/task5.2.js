var array = [
    [6, 3, 5, 12, 9],
    [5, 2, 3, 15, 2],
    [4, 1, 7, 07, 7],
];

function logMatrixRowSummMaxValue() {

    function calculateMatrixRowSumm() {
        var result = [];
        for (let i = 0; i < array.length; i++) {
            var summ = 0;
            for (let index = 0; index < array[i].length; index++) {
                const element = array[i][index];
                summ += element;
            }
            result.push(summ)
        }
        return result;
    }

    calculateMatrixRowSumm();

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

    var summ = calculateMatrixRowSumm();
    var maxValue = determineMaxValue(summ);

    console.log(maxValue);
}

logMatrixRowSummMaxValue();