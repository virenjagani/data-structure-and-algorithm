//Find all occurrence of an integer in the array and and store counts in object. 
console.clear();

const element = [1, 3, 5, 2, 20, 54, 23, 3, 2, 3, 5, 68, 67, 3, 68, 69, 30];
let count = 0;
let result = {};
let ele = 0;

element.sort((a, b) => a - b);

element.forEach((item, index, arr) => {
    if(result[item]) result[item]++
    else result[item]=1;
});

console.log(result);




