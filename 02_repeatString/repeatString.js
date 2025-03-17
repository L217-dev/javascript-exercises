const repeatString = function(string,num) {
    let repearString = "";
    if (num>=0){ 
        for (i=0; i<num; i++) {
                repearString+=string
            }
        return repearString;
    }else{
        return 'ERROR'
    }
}
// Do not edit below this line
module.exports = repeatString;
