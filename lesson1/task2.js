function logNumberToZeroRelation(number) {
    if (number === 0) {
        console.log('число является нулевым');
    }

    if (number < 0) {
        console.log('число является отрицательным');
    }

    if (number > 0) {
        console.log('число является положительным');
    }
}

logNumberToZeroRelation(0);
