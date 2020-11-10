var a = 6;
var b = 1;

function main() {
    var i = 0;
    function recursive(a, b) {
        if (i < a) {
            b *= (a - i);
            i++;
            recursive(a, b);
        } else {
            console.log(b);
        }
    }
    recursive(a, b);
}

main();