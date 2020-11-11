function main() {
    var i = 300;
    function log17Dividable() {
        if (i < Number.MAX_VALUE) {
            if ((i % 17) === 0) {
                console.log(i);
                return;
            }
            i++;
            log17Dividable();
        }
    }
    log17Dividable();
}

main();
