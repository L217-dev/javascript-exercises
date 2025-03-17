const removeFromArray = function() {
    let filterArray = arguments[0]
    if (arguments.length==2){
        filterArray=filterArray.filter(value=> value!=+arguments[1] ) //take out the requested value to deleted 
    }else{
        for (const argument of arguments){
            filterArray=filterArray.filter(value=> value!==argument) //evaluate and take out multiples value to deleted
        }
     }
return filterArray
};

// Do not edit below this line
module.exports = removeFromArray;
