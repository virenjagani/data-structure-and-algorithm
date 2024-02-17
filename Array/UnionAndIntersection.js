//Find the Union and Intersection of the two sorted arrays.
console.clear();

const arr1 = [1, 3, 5, 7, 7, 18, 27, 34, 19, 0];
const arr2 = [2, 3, 4, 6, 8, 2, 5, 23, 1, 28];
let union;
let intersection = []

union = [...new Set([...arr1,...arr2])]; //Union

intersection = arr1.filter((value,index,arr)=>{
    return arr2.includes(value)
})

console.log(union);
console.log(intersection)













