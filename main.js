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

// 2 - Create function which will return function with callback in arguments

const myCbFunc = (...cbArgs) => {
    return (callback) => {
        callback(cbArgs);
    }
};

// 3 - Create a function that will replace all number dividing three with ‘foo’,
// dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.

const fooBarReplace = (args) => {
    return [...args].map(el => {
        return (!(el % 3) && !(el % 7)) ? 'foobar'
            : (!(el % 3) ? 'foo'
                : (!(el % 7) ? 'bar'
                    : el));
    })
};
let randomN = Math.floor(Math.random() * (100 - 20 + 1) ) + 20;

console.log('fooBarReplace', fooBarReplace([...Array(randomN).keys()]));
