var value = 1;
var units = 'MB';
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