//find missing odd number from the array.

const elements = [1, 3, 5, 7, 11, 13, 15];

const set = new Set(elements);
let rslt;

const result = () => {
  for (let i = 0; i <= elements.length * 2 + 1; i++) {
    if (i % 2 !== 0) {
      if (!set.has(i)) {
        rslt = i
      }
    }
  }
};

result();

console.log(rslt)


