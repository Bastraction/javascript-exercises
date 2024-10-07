const removeFromArray = function(array, ...num) {

    const newArray = [];

    array.forEach(element => {

        if (!num.includes(element)) {
            newArray.push(element);
          }
        
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
