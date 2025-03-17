const reverseString = function(string) {
    let reverseString = ''
    for (i=(string.length -1);i>=0;i--){
        reverseString+=string[i]
    }
    return reverseString
};
console.log(reverseString('hello`'))
// Do not edit below this line
module.exports = reverseString;
