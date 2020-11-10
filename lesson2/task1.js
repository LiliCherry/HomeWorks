var message = 'Hello, World!';

function main() {
    var i = message.length - 1;
    function recursive(a) {
        if (i >= 0) {
            var last = a[i];
            console.log(last);
            i--;
            recursive(a);
        }
    }
    recursive(message);
}

main();




