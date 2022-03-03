var exports = module.exports = {}

exports.sum = function(value_1, value_2) {
    console.log('Value:' + value_1);
    console.log('Value:' + value_2);
    console.log('Operation: Addition');
    console.log('Result: ' + (value_1 + value_2));
   
}
exports.sub = function(value_1, value_2){
    console.log('Value:' + value_1);
    console.log('Value:' + value_2);
    console.log('Operation: Subtraction');
    console.log('Result: ' + (value_1 - value_2));
   
}
exports.multiply = function(value_1,value_2){
    console.log('Value:' + value_1);
    console.log('Value:' + value_2);
    console.log('Operation: Multiplication');
    console.log('Result: ' + (value_1 * value_2));
    
}
exports.divide = function(value_1,value_2){
    console.log('Value:' + value_1);
    console.log('Value:' + value_2);
    console.log('Operation: Division');
    console.log('Result: ' + (value_1 / value_2));

}
