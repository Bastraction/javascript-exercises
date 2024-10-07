const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR'
    }

    let sum = 0;

    if(num1 > num2){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    for (let index = num1; index <= num2; index++) {
        sum = sum + index;
        
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
