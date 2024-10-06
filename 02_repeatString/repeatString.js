const repeatString = function(string, num) {


    if(num < 0){
        return 'ERROR'
    }

    str = ''
    for (let index = 0; index < num; index++) {
        
        str = str + string;
        
    }

    return str;

};

// Do not edit below this line
module.exports = repeatString;
