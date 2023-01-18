// flat
const arr2 = [1, 2, 3, [4 ,5]];
const arr1 = arr2.flat();
console.log(arr1)

const arr3 = [1, 2, 3, [4, [5, 6]]];
const a2 = arr3.flat();
const a1 = arr3.flat(2);
console.log(a2)
console.log(a1)

// flatmap
const arr =[1, 2, 3]
const result = arr.flatMap(item => item * 10)
console.log(result)
