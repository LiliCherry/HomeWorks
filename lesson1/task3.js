function logBytesInValue(value, units) {
    if (units === 'KB') {
        var byte = value * 1024
        console.log(byte)
    }

    if (units === 'MB') {
        var byte = value * 1024 * 1024
        console.log(byte)
    }

    if (units === 'GB') {
        var byte = value * 1024 * 1024 * 1024
        console.log(byte)
    }
}

logBytesInValue(1, 'MB');
