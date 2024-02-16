//Find the minimum and maximum element in an array without SORT method.
console.clear();

const element = [1, 3, 5, 2, 20, 54, 23, 3, 67, 68, 69, 30];

var min = element[0]
var max = element[0]

element.forEach((item,index,arr)=>{
    if(arr[index]<min) min=item;
    if(arr[index]>max) max=item;
})

console.log("minimum: ", min, " && maximum: ", max);
