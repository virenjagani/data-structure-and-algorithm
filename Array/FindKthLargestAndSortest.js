//Find the Kth largest and Kth smallest number in an array
console.clear();

const element = [4, 3, 5, 2, 20, 54, 23, 3, 67, 68, 69, 30];

let KthSmall=element[0];
let KthLarge=element[0];

for(let i=0;i<element.length;i++){
   if(KthLarge<=element[i]) KthLarge=element[i]
   if(KthSmall>=element[i]) KthSmall=element[i]
   
}

console.log('L: ',element.indexOf(KthLarge) + 1,' S: ',element.indexOf(KthSmall) + 1)









