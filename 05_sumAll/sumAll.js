const sumAll = function(startNumber,endNumber) {
    function isNotInteger(startNumber,endNumber){
        return (startNumber%1!==0 || endNumber%1!==0 || typeof(startNumber)!=='number'|| typeof(endNumber)!=='number')
    }
    if (startNumber<0 || endNumber<0 || isNotInteger(startNumber,endNumber)){
        return "ERROR"
    }
    else if (startNumber>endNumber){
        [startNumber,endNumber]=[endNumber,startNumber]
    }
   
    let total = 0
    let addedValue=startNumber
    for (let step=0; step<=(endNumber-startNumber); step++){
        total+=addedValue
        addedValue++
    }
return total
};

// Do not edit below this line
module.exports = sumAll;
