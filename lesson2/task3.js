var a = 344;
var n = 7;
var counter = 0;

function main() {
    var i = 0;
    function logDividersRecursive(a, n) {
        if (i < Number.MAX_VALUE) {
            var b = a % i;
            i++;
            if (b === 0) {
                console.log(i);
                counter++;
            }
            if (counter === n) {
                return;
            }
            logDividersRecursive(a, n);
        }
    }
    logDividersRecursive(a, n);
}

main();
