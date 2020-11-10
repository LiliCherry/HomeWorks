var a = 344;
var n = 7;
var counter = 0;

for (let i = 0; i < Number.MAX_VALUE; i++) {
    var b = a % i;
    if (b === 0) {
        console.log(i);
        counter++;
    }
    if (counter === n) {
        break;
    }
}
