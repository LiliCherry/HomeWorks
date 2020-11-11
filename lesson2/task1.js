var message = 'Hello, World!';

function main() {
    var i = message.length - 1;
    function logReversedMessageRecursive(a) {
        if (i >= 0) {
            var last = a[i];
            console.log(last);
            i--;
            logReversedMessageRecursive(a);
        }
    }
    logReversedMessageRecursive(message);
}

main();
