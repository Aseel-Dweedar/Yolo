"use strict";

// given an array, return an array for the elements that doesn't have greater elements in the right side of them.. EX: [2,8,5,4] => [8,5,4]
let arr = [2, 8, 5, 4, 7, 3, 6]; // [8, 7, 6]

const rightEle = function(arr) {
    let newArr = [];
    newArr.push(arr[arr.length - 1]);
    let max = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > max) {
            newArr.push(arr[i]);
            max = arr[i];
        }
    }
    // other solution
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] < arr[j]) {
    //             break;
    //         }
    //         if (j === arr.length - 1) {
    //             newArr.push(arr[i]);
    //         }
    //     }
    // }
    // newArr.push(arr[arr.length - 1]);
    return newArr;
};

// console.log(rightEle(arr));

// check if two words have same letter's order (ignore duplication)

let s1 = "geeks",
    s2 = "geks",
    s3 = "geeks",
    s4 = "geeks",
    s5 = "wow",
    s6 = "wwo";

function sameLetters(s1, s2) {
    let newS1 = s1[0],
        newS2 = s2[0];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s1[i + 1]) {
            newS1 += s1[i];
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] != s2[i + 1]) {
            newS2 += s2[i];
        }
    }

    if (newS1 === newS2) {
        return true;
    }
    return false;
}

// console.log(sameLetters(s1, s2));
// console.log(sameLetters(s3, s4));
// console.log(sameLetters(s5, s6));

// check if two words with different order of the letters have same letters

let str1 = "1wsow";
let str2 = "ow1ws";
let str3 = "ow1wss";
let str4 = "ow1wws";

function checkStr(s1, s2) {
    if (s1.length != s2.length) return false;
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s1.length; i++) {
        if (obj1[s1[i]]) {
            obj1[s1[i]]++;
        } else {
            obj1[s1[i]] = 1;
        }
        if (obj2[s2[i]]) {
            obj2[s2[i]]++;
        } else {
            obj2[s2[i]] = 1;
        }
    }

    for (const key in obj1) {
        if (obj1[key] != obj2[key]) {
            return false;
        }
    }
    return true;
}

// other solution // // // // // // // //
// const checkStr = (str1, str2) => {
//     if (str1.length != str2.length) {
//         return false;
//     }
//     let arr1 = str1.split("");
//     let arr2 = str2.split("");
//     arr1.sort((a, b) => (a < b ? -1 : 1));
//     arr2.sort((a, b) => (a < b ? -1 : 1));
//     return arr1.toString() == arr2.toString();
// };

// console.log(checkStr(str1, str2));
// console.log(checkStr(str3, str4));

// revers a String

let str = "reversedString";

function reversedString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

// console.log(reversedString(str));

let n = "1238456";
//output
//6152438

function reArrange(str) {
    let newStr = "";
    let arrMid = Math.floor(str.length / 2);
    for (let i = 0; i < arrMid; i++) {
        newStr += str[str.length - 1 - i];
        newStr += str[i];
    }
    if (str.length % 2 != 0) {
        newStr += str[arrMid];
    }
    return newStr;
}

// console.log(reArrange(n));

// swap two variable without third variable

let x = 5;
let y = 7;
//output
//x = 7;
//y = 5;

function swap(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return `x = ${x} + y = ${y}`;
}
// console.log("4. swap : ", swap(x, y));

// method to find the duplicated number in arr from 1-9
//input
let num = [1, 2, 4, 3, 5, 6, 7, 8, 7, 9]; // must be arr from 1 - 9 , sum from 1 to 9 = 45
//output
//7

function repeatedNum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let result = sum - 45;
    return result;
}

// console.log("5. repeatedNum : ", repeatedNum(num));

//input
let num1 = 14; // how much time you can divide the number by 2 and not able to divide
//output
//6

function timeOfMeasurement(num) {
    let count = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        count++;
    }
    return count;
}

// console.log(timeOfMeasurement(num1));

//input
let arrF = [1, 5, 6, 7, 8, 9, 10, 12];
//output
//[1,8,5,9,6,10,7,12]

function newArrange(arr) {
    let newArr = [];
    let y = Math.floor(arr.length / 2);
    for (let i = 0; i < y; i++) {
        newArr.push(arr[i], arr[y + i]);
    }
    return newArr;
}
// console.log("8. newArrange : ", newArrange(arrF));

//input
let arrayF = [1, 2, 3, 3, 5, 7, 8, 2, 2, 2, 2, 4, 8, 8, 5];
//output
//[1,2,6,5,7,8,8,4,16,5]

function sumRepetition(arr) {
    let counter = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            counter += arr[i];
        } else if (counter != 0) {
            counter += arr[i];
            newArr.push(counter);
            counter = 0;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const sumRepetition2 = (arr) => {
    let newArr = [];
    let sum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            sum += arr[i];
            continue;
        }
        newArr.push(sum);
        sum = arr[i + 1];
    }
    return newArr;
};

// console.log(sumRepetition(arrayF));
// console.log(sumRepetition2(arrayF));

// //input
let string = "swsssssssswaaanaeaa";
// //output
// // "sw8sw3anae2a"

function timesOfRepeatedStr(str) {
    let counter = 0;
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter++;
        } else if (counter != 0) {
            counter++;
            newStr = newStr + counter + str[i];
            counter = 0;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

// console.log(timesOfRepeatedStr(string));

// Write a function that will take in an array and index and return new shuffled array where the fist element will be starting from that index and the second will be the original one and so on: // exp: // input: [1, 2, 3, 4, 5, 6], idx = 3 // output: [4, 1, 5, 2, 6, 3]
let testArr = [1, 2, 3, 4, 5, 6]; // right
let testArr1 = [1, 2, 3, 4, 5, 6, 7]; // mid
let testArr2 = [1, 2, 3, 4, 5, 6, 7, 8]; // left

function shuffledArray(arr, idx) {
    let newArr = [];
    newArr.push(arr[idx]);
    for (let i = 0; i < idx; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
        if (arr[idx + 1 + i]) {
            newArr.push(arr[idx + 1 + i]);
        }
    }
    if (arr.length / 2 > idx) {
        for (let i = idx * 2 + 1; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(shuffledArray(testArr, 3));
// console.log(shuffledArray(testArr1, 3));
// console.log(shuffledArray(testArr2, 3));

// Find all the missing numbers between the min and the max number in this array (No built in methods allowed)
// array = [0, 5, 4, 9, 3]; output ==> [1, 2, 6, 7, 8]

let missArray = [0, 5, 4, 9, 3];

function missingNumbers(arr) {
    let max = arr[0],
        min = 0,
        newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (let i = min + 1; i < max ; i++) {
        if (!arr.includes(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}

// console.log(missingNumbers(missArray));

// Write a function that will return a string combined with the number of letters between the fist and the last letter. // input = 'Jack', output: 'J2k'

let ss1 = "aseel";
// output => "a3l"

function lettersBetween(str) {
    let newStr = str[0],
        counter = "";

    for (let i = 1; i < str.length - 1; i++) {
        counter++;
    }
    return (newStr = newStr + counter + str[str.length - 1]);
}

// console.log(lettersBetween(ss1));

// 1.Repeated letters in a string without using built-in methods Input = weeyoooz Output = ee - 2 , o-3

// 2. The sum of number that falls between the smaller and the largest number in that array without using built-in methods Input = [2,5,6,7,9,10,11,15] Output = 119

let sumArr = [2, 5, 6, 7, 16, 10, 11, 9]; // 135

function sumBetween(arr) {
    let max = arr[0],
        min = 0,
        sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    sum = (max * (max + 1)) / 2 - (min * (min + 1)) / 2 - 1; // mathematical

    return sum;
}

// console.log(sumBetween(sumArr));

// 3. Get all prim numbers between 1-num

const primeNumber = (num) => {
    let arr = [];
    if (num <= 2) return arr;
    for (let i = 3; i <= num; i++) {
        let m = Math.floor(i / 2);
        let flag = 0;
        for (let j = 2; j <= m; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) arr.push(i);
    }
    return arr;
};

// console.log(primeNumber(47));

// 4. Check if the the cube of each number in a given is the same to that number for example: Input = 153, 1^3 + 5^3 + 3^3 = 153 Output = true

let inNum = 153;

function numCube(num) {
    let sum = 0;
    let newNum = num;
    while (newNum != 0) {
        let lastNum = newNum % 10;
        sum += Math.pow(lastNum, 3);
        newNum = Math.floor(newNum / 10);
    }
    if (sum == num) {
        return true;
    }
    return false;
}

// console.log(numCube(inNum));

// 5. Revers a number without turning the number into a string or using built-in methods.

//input
let revNum = 1999;
//output
//9991

function reversedNum(revNum) {
    let reverse = 0;
    while (revNum != 0) {
        let lastNum = revNum % 10;
        reverse = reverse * 10 + lastNum;
        revNum = Math.floor(revNum / 10);
    }
    return reverse;
}

// console.log("12. reversedNum : ", reversedNum(revNum));

// Find all unique characters in a string .
// set or object as required

// method to calculate a given number and keep calculating till it became with one digit
// input 159 ==> 1 + 5 + 9  = 15 ==> 1 + 5  = 6 (the output)

let sumNum = 258;

function numSum(num) {
    let sum = 0;
    while (num > 0 || sum > 9) {
        if (num === 0) {
            num = sum;
            sum = 0;
        }
        let lastNum = num % 10;
        sum += lastNum;
        num = Math.floor(num / 10);
    }
    return sum;
}

// console.log(numSum(sumNum));

// method to fine if there is a repeated 0 or 1 three times in row in 0/1 string
//   "1011110101010"  ==> true

let stt = "101100001010101";

function repeatedStr(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1] && str[i] === str[i + 2]) {
            return true;
        }
    }
    // other solution if the counter not 3 (given number)
    // let counter = 0;
    //     for (let i = 0; i < str.length; i++) {
    //    if (str[i] === str[i + 1]) {
    //        counter ++;
    //    } else if (counter != 0) {
    //        counter++;
    //        if (counter >= 3) return true;
    //        else counter = 0;
    //    }
    // }

    return false;
}

// console.log(repeatedStr(stt));

// method to draw a triangle or a pyramid using number or stars

function generateTriangle(num) {
    let c = 1;
    var output = "";
    for (var i = 0; i < num; i++) {
        for (var j = 0; j <= i; j++) {
            output += c + "  ";
            c++;
        }
        console.log(output);
        output = "";
    }
}

// console.log(generateTriangle(5));

function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let str = " ".repeat(n - i);
        let str2 = "*".repeat(i * 2 - 1);
        console.log(str + str2 + str);
    }
}

// console.log(pyramid(5));

// method tp loop revers array's elements as a given number
// input ==> [1, 2, 3, 4, 5, 6] , num (3) // revers the last 3 element => output = [6 , 5, 4, 1, 2, 3 ]
// if the number is greater than array length keep reversing back ==>
// input ==> [1, 2, 3, 4, 5, 6] , num (8) => output ==> [1, 2, 6, 5, 4, 3]
// input ==> [1, 2, 3, 4, 5, 6] , num (16) => output ==> [6 , 5, 4, 3, 1, 2]
// input ==> [1, 2, 3, 4, 5, 6] , num (22) => output ==> [1, 2, 3, 4, 6, 5]
// input ==>  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] , num (3) => output ==> [10, 9, 8, 1, 2, 3, 4, 5, 6 ,7]
// input ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] , num (16) => output ==> [1, 2, 3, 4, 5, 6 ,10, 9, 8, 7]
// input ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] , num (22) => output ==> [10, 9, 1, 2, 3, 4, 5, 6, 7, 8]

let arrToReverse = [1, 2, 3, 4, 5, 6];
let arrToReverse2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArrAsGivenNumber(arr, n) {
    let reverseTimes = Math.floor(n / arr.length);
    let carryOver = n % arr.length;
    let newArr = [];
    if (reverseTimes % 2 == 0) {
        for (let i = 1; i <= carryOver; i++) {
            newArr.push(arr[arr.length - i]);
        }
        for (let i = 0; i < arr.length - carryOver; i++) {
            newArr.push(arr[i]);
        }
    } else {
        for (let i = 0; i < carryOver; i++) {
            newArr.push(arr[i]);
        }
        for (let i = 1; i <= arr.length - carryOver; i++) {
            newArr.push(arr[arr.length - i]);
        }
    }
    return newArr;
}

// console.log(reverseArrAsGivenNumber(arrToReverse, 3));
// console.log(reverseArrAsGivenNumber(arrToReverse, 8));
// console.log(reverseArrAsGivenNumber(arrToReverse, 16));
// console.log(reverseArrAsGivenNumber(arrToReverse, 22));
// console.log(reverseArrAsGivenNumber(arrToReverse2, 3));
// console.log(reverseArrAsGivenNumber(arrToReverse2, 16));
// console.log(reverseArrAsGivenNumber(arrToReverse2, 22));

arr = [1, 0, 2, 0, 3, 4, 2, 1, 7, 2, 8, 10, 9];

const getDecreasingAndIncreasingPoint = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) || (arr[i] < arr[i + 1] && arr[i] < arr[i - 1])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// console.log(getDecreasingAndIncreasingPoint(arr));

// how many each element repeated in the array

arr = ["aseel", "0", "2", "0", "3", 4, "2", 1, 7, "aseel"];

const varCounter = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
};

// console.log(varCounter(arr));

// method to swap two given arrays

const swapString = (str1, str2) => {
    let str3 = str1;
    str1 = str2;
    str2 = str3;
};

// find Mutual Numbers in two arrays with the same place

let arr1 = [1, 4, 2, 7, 8, 10, 9, 10];
let arr2 = [1, 5, 2, 3, 7, 8];

const findMutualNumbers = (arr1, arr2) => {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
};

// console.log(findMutualNumbers(arr1, arr2));

// method to duplicated Array ==> [1, 2, 3] output ==> [1, 2, 3, 1, 2, 3]

arr = [7, 2, 8, 10, 9];

const duplicatedArray = (arr) => {
    let newArr = [...arr, ...arr];

    // other solution (1)
    // let newArr = [...arr];
    // for (let i = 0; i < arr.length; i++) {
    //   newArr.push(arr[i]);
    // }

    // other solution (2)
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     newArr[i] = arr[i];
    //     newArr[arr.length + i] = arr[i];
    // }
    return newArr;
};

// console.log(duplicatedArray(arr));

// method to find the missing number in sorted array

arr = [1, 2, 3, 5, 6, 7, 9];

const missingOenNumber = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] != arr[i] + 1) {
            newArr.push(arr[i] + 1);
        }
    }
    return newArr;
};

// console.log(missingOenNumber(arr));

// method to find the missing multi-numbers in sorted array

arr = [1, 2, 3, 6, 7, 11];

const missingMultiNumbers = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] != arr[i] + 1) {
            for (let j = arr[i] + 1; j < arr[i + 1]; j++) {
                newArr.push(j);
            }
        }
    }
    return newArr;
};

// console.log(missingMultiNumbers(arr));

// method to find Second Max number in the array

arr = [1, 15, 3, 10, 7];

const findSecondMax = (arr) => {
    let max = arr[0];
    let secMax = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secMax = max;
            max = arr[i];
        } else if (arr[i] > secMax) {
            secMax = arr[i];
        }
    }
    return secMax;
};

// console.log(findSecondMax(arr));

// input
// String = ‘1+1+2+3+1+2+3’
// out put
// Return String = ‘1+1+1+2+2+3+3’
// can only have (1,2,3)

const orderString = (str) => {
    let str1 = "";
    let str2 = "";
    let str3 = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "1") {
            str1 += "1+";
        }
        if (str[i] == "2") {
            str2 += "2+";
        }
        if (str[i] == "3") {
            str3 += "3+";
        }
    }
    let lastString = str1 + str2 + str3;
    // return lastString.slice(0, lastString.length - 1);
    return lastString.substring(0, lastString.length - 1);
};

// console.log(orderString("1 + 1 + 2 + 3 + 1 + 2 + 3"));

// method to walk with the array when ever you find "<" erase it and a character before
// input ==> str = "this* << is a new *<test"
// output ==> str = "this is a new test"

let strToClean = "this* << is a new *<test";

const cleanString = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "<") {
            newStr = newStr.substring(0, newStr.length - 1);
        } else {
            newStr += str[i];
        }
    }
    return newStr;
};

// console.log(cleanString(strToClean));