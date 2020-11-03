var a = 2346;
var b = a.toString();
var c = 0;

for (let i = 0; i < b.length; i++) {
    var d = Number(b[i]);
    if ((d % 2) === 0) {
        c += d;
    }
}

console.log(c);
