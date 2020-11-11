var baseMatrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

function transposeMatrix() {

    var transposedMatrix = [[], []];

    for (let i = 0; i < transposedMatrix.length; i++) {
        for (let index = 0; index < baseMatrix.length; index++) {
            var column = baseMatrix[index];
            transposedMatrix[i].push(column[i]);
        }
    }

    console.log(transposedMatrix);
}

transposeMatrix();
