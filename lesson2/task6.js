var a = 120;
var b = 180;
var c = a + b;
var d = 0;

for (let i = 0; i < c; i++) {
    if ((a % i) === 0 && (b % i) === 0) {
        d = i + 0;
    }
}

console.log(d);