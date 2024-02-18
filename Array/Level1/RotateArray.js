//How to rotate an array left and right by a given number K.
console.clear();

const elements = [1, 2, 3, 4, 5, 6, 7];
const target = 3;

//left side rotate.
const leftRotate = ([...arr],trg) => {
  const temp = arr.splice(0, trg);
  return [...arr, ...temp] + ' :Left Side';
};
const rightRotate = ([...arr], trg) => {
    const temp = arr.splice(-trg) 
    return  [...temp, ...arr] + " :Right Side";
};

console.log(leftRotate(elements,target));
console.log(rightRotate(elements, target));




