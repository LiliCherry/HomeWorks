var a = 344;

for (let i = 0; i < a; i++) {
    var b = a % i;
    if (b === 0) {
        console.log(i);
    }
}
