// 1 - Find in array: sum, min and max, replace min and max - create custom functions

const customArr = [3, -6, 0, 16, 9, -25, 4, 10];
const getSum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
const getMin = (arr) => arr.reduce((prev, curr) => (prev < curr ? prev : curr));
const getMax = (arr) => arr.reduce((prev, curr) => (prev > curr ? prev : curr));
const replaceMinMax = (arr) => {
    let arrCopy = [...arr];
    let minIndex = arr.findIndex(arrEl => arrEl === getMin(arr));
    let maxIndex = arr.findIndex(arrEl => arrEl === getMax(arr));
    arrCopy[minIndex] = getMax(arr);
    arrCopy[maxIndex] = getMin(arr);
    return arrCopy;
};

console.info([getSum, getMin, getMax, replaceMinMax]
    .map(func => {
        return {
            'function name': func.name,
            result: func(customArr)
        }
    }));
