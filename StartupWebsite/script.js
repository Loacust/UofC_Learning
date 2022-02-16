function sortArray(array){
for(var i=0;i<array.length-1;i++){
    for(var j= i+1; j<array.length;j++){
        if(array[i]>array[j]){
            var temp= array[i];
            array[i]=array[j];
            array[j]= temp;
        }
    }
}
return array;
}

function divisibles(arr){
    var sum=0
    for (var q=0; q<arr.length;q++){
        if(arr[q]%5===0){
            sum=sum+arr[q];
        }
    }
    return sum;
}

function printArray(arr){
    for  (var q=0;q<arr.length;q++){

        console.log(arr[q]);
    }
}

var array = [4,3,55,5,0,1,-2]
var x = sortArray(array);
console.log("The sum is: "+divisibles(x));
printArray(x);