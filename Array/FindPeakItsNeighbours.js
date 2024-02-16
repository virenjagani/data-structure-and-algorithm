// Find a peak element which is not smaller than its neighbours
console.clear();

const element = [1, 3, 5, 2, 20, 54, 23, 3, 67, 68, 69, 30];

const result = [];

element.forEach((item, index, arr) => {
  if (index > 0) {
    if (arr[index] >= arr[index + 1] && arr[index] >= arr[index - 1]) {
      result.push(item);
    }
  } else if (index === 0) {
    if (arr[0] > arr[1]) {
      result.push(arr[0]);
    }
  }
});

console.log(result);
