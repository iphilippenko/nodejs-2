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
let randomN = Math.floor(Math.random() * (70 - 20 + 1)) + 20;

console.info('fooBarReplace', fooBarReplace([...Array(randomN).keys()]));

// 4 - Create function with 2 string params.
// It must check if letters in the first correspond to the number of matches in second and return %.

const compareStrings = (str1, str2) => {
    let matchCount = [...str1].reduce((prev, char1) => prev + [...str2].filter(char2 => char1 === char2).length, 0);
    return ((matchCount / str1.length) * 100).toFixed(2) + '%';
};

console.info('Matches in ', compareStrings('asdfghj', 'jhggfdaaa'));

// 5 - Create calculator
const operators = {
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
    '+': (x, y) => x + y,
    '-': (x, y) => x - y
};
const calculate = (operand1, operand2, operator) => {
    if (/[+*\/-]/g.test(operator)) {
        return operators[operator](operand1, operand2);
    } else {
        console.error('Unknown operator');
    }
};
console.log('Calculator');
console.log('2 * 9 = ', calculate(2, 9, '*'));
console.log('6 / 3 = ', calculate(6, 3, '/'));
console.log('2 - 7 = ', calculate(2, 7, '-'));
console.log('34 + 7 = ', calculate(34, 7, '+'));
console.log('34 + 7 = ', calculate(34, 7, '~'));
