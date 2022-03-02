module.exports.sum= sum;
module.exports.sub= sub;
module.exports.multiply= multiply;
module.exports.divide = divide;



var sum = function(value_1, value_2) {
    
    return value_1 + value_2;
}
var sub = function(value_1, value_2){
    return value_1 - value_2;
}
var multiply = function(value_1,value_2){
    return value_1 * value_2;
}
var divide = function (value_1,value_2){
    return value_1/value_2;
}