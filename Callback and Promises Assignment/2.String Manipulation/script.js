function manipulateString(str, logString) {
    return logString(str);
}
function logString(str) {
    console.log(`The manipulated String is: ${str.toUpperCase()}`);
}
manipulateString("hello, world!", logString);

