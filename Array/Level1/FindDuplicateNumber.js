// How do you find the duplicate number on a given integer array
console.clear();

const element = [1, 3, 5, 2, 20, 54, 23, 3, 2, 3, 5, 68, 67, 3, 68, 69, 30];

const set = new Set()
const duplicates =[]

for(let i=0; i<element.length; i++){    
    if(set.has(element[i]) && !(new Set([...duplicates]).has(element[i]))){
        duplicates.push(element[i])
    }else{
        set.add(element[i]);
    }
}
console.log(duplicates);





