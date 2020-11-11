var a = 150;
var b = 50;

function main() {
    var i = 0;
    var c = a + b;
    var d = 0;
    function logCommonDivider() {
        if (i < c) {
            if ((a % i) === 0 && (b % i) === 0) {
                d = i;
            }
            i++;
            logCommonDivider();
            return;
        }
        console.log(d);
    }
    logCommonDivider();
}

main();
