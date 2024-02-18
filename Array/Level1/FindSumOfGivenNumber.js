//How do you find all pairs of an integer array whose sum is equal to a given number

const element = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const target = 12;
const resultPairs=[]

const pairs = (trg)=> {
    for(let i=0; i<element.length; i++){
        for(let j=0; j<element.length; j++){
            if(element[i]+element[j] === trg){
               resultPairs.push([element[i],element[j]])
            }
        }
    }    
}

pairs(target);
console.log(resultPairs)



