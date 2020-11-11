var a = 1234;
var b = a.toString();
var c = 0;

function main() {
    var i = 0;
    function calculateSumNumber() {
        if (i < b.length) {
            var d = Number(b[i]);
            if ((d % 2) === 0) {
                c += d;
            }
            i++;
            calculateSumNumber();
        } else {
            console.log(c);
        }
    }
    calculateSumNumber();
}

main();
