var a = 6;
var b = 1;

function main() {
    var i = 0;
    function calculateFactorialRecursive(a, b) {
        if (i < a) {
            b *= (a - i);
            i++;
            calculateFactorialRecursive(a, b);
        } else {
            console.log(b);
        }
    }
    calculateFactorialRecursive(a, b);
}

main();
