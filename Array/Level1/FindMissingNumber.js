// How do you find the missing number in a given integer array of 1 to 15?

const findMissingNumber = ([...arr]) => {
    const n=15;
    const totalSumOfMainArr = n*(n+1)/2;

    const totalSumOfProvidedArr = arr.reduce((acc,ele,inx,arr)=>acc+=ele,0);

    const missingNumber = totalSumOfMainArr - totalSumOfProvidedArr;

    return missingNumber;
}

const array = [1,2,3,4,5,7,8,9,10,11,12,13,14,15]
console.log(findMissingNumber(array))



