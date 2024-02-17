//Move all the negative elements to one side of the array without sort methods.
console.clear();

const element = [1, 3, -5, -2, 20, 54, 23, 0, 3, -2, 3, 5, 0, 68, -67, 3, 68, 69, 30];

const negativeNum=[]
const positiveNum=[]
let zeros=[];
let result=[]

element.forEach(item=>{
    if(item<0) negativeNum.push(item);
    else if(item>0) positiveNum.push(item);
    else zeros.push(0)
})

result = [...negativeNum,...zeros,...positiveNum]

console.log(result)






