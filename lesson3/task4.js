var Matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

var Matrix2 = [
    [6, 5],
    [4, 3],
    [2, 1]
];

var derivativeMatrix = [[], [], []];

for (let i = 0; i < derivativeMatrix.length; i++) {
    for (let index = 0; index < Matrix1[0].length; index++) {
        derivativeMatrix[i].push(Matrix1[i][index] * Matrix2[i][index]);
    }
}
console.log(derivativeMatrix);