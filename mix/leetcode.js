

const dup1 = (nums) => {

    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            return true;
        } else {
            obj[nums[i]] = 1;
        }
    }
    return false;
}

// console.log(dup1([1, 2, 3, 1]));
// console.log(dup1([1, 2, 3, 4]));
// console.log(dup1([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

const dup2 = (nums, k) => {

    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] != null) {
            // console.log("here");
            if (Math.abs(i - obj[nums[i]]) <= k) {
                // console.log("but not here");
                return true;
            } else {
                obj[nums[i]] = i;
            }
        } else {
            obj[nums[i]] = i;
        }
    }
    return false;
}

// console.log(dup2([1, 2, 3, 1] , 3));
// console.log(dup2([1,0,1,1] , 1));
// console.log(dup2([1,2,3,1,2,3] , 2));


const dup3 = (nums, k, t) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = Math.max(0, i - k); j < Math.min(i + k, nums.length); j++) {
            if (i != j) {
                if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                    return true;
                }
            }
        }
    }
    return false;
}


// console.log(dup3([1, 2, 3, 1], 3, 0));
// console.log(dup3([1, 0, 1, 1], 1, 2));
// console.log(dup3([1, 5, 9, 1, 5, 9], 2, 3));


const removeDuplicatesSortedArray = (nums) => {

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1)
            i--;
        }
    }
    return nums.length;
}


// console.log(removeDuplicatesSortedArray([1, 1, 2]));
// console.log(removeDuplicatesSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));


const removeElement = (nums, val) => {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--;
        }
    }
    return nums.length;
}

// console.log(removeElement([3, 2, 2, 3], 2));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));


const searchInsertPosition = (nums, target) => {
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) {
            return i;
        }
    }
}

const nextGreaterElement = function (nums1, nums2) {
    let arr = [];
    if (nums1.length === 0) {
        return arr;
    }
    for (let i = 0; i < nums1.length; i++) {
        let nextIdx = nums2.indexOf(nums1[i]) + 1;
        if ((nums2[nextIdx]) > nums1[i]) {
            arr.push(nums2[nextIdx])
        } else {
            let max = nums1[i];
            for (let j = nextIdx + 1; j < nums2.length; j++) {
                if (nums2[j] > max) {
                    max = nums2[j]
                    break;
                }
            }
            if (max === nums1[i]) {
                arr.push(-1)
            } else {
                arr.push(max)
            }
        }
    }
    return arr;
};

255

let arr1 = [137, 59, 92, 122, 52, 131, 79, 236, 94, 171, 141, 86, 169, 199, 248, 120, 196, 168, 77, 71, 5, 198, 215, 230, 176, 87, 189, 206, 115, 76, 13, 216, 197, 26, 183, 54, 250, 27, 109, 140, 147, 25, 96, 105, 30, 207, 241, 8, 217, 40, 0, 35, 221, 191, 83, 132, 9, 144, 12, 91, 175, 65, 170, 149, 174, 82, 102, 167, 62, 70, 44, 143, 10, 153, 160, 142, 188, 81, 146, 212, 15, 162, 103, 163, 123, 48, 245, 116, 192, 14, 211, 126, 63, 180, 88, 155, 224, 148, 134, 158, 119, 165, 130, 112, 166, 93, 125, 1, 11, 208, 150, 100, 106, 194, 124, 2, 184, 75, 113, 104, 18, 210, 202, 111, 84, 223, 173, 238, 41, 33, 154, 47, 244, 232, 249, 60, 164, 227, 253, 56, 157, 99, 179, 6, 203, 110, 127, 152, 252, 55, 185, 73, 67, 219, 22, 156, 118, 234, 37, 193, 90, 187, 181, 23, 220, 72, 255, 58, 204, 7, 107, 239, 42, 139, 159, 95, 45, 242, 145, 172, 209, 121, 24, 21, 218, 246, 49, 46, 243, 178, 64, 161, 117, 20, 214, 17, 114, 69, 182, 85, 229, 32, 129, 29, 226, 136, 39, 36, 233, 43, 240, 254, 57, 251, 78, 51, 195, 98, 205, 108, 61, 66, 16, 213, 19, 68, 237, 190, 3, 200, 133, 80, 177, 97, 74, 138, 38, 235, 135, 186, 89, 201, 4, 101, 151, 31, 228, 231, 34, 225, 28, 222, 128, 53, 50, 247];

let arr2 = [137, 59, 92, 122, 52, 131, 79, 236, 94, 171, 141, 86, 169, 199, 248, 120, 196, 168, 77, 71, 5, 198, 215, 230, 176, 87, 189, 206, 115, 76, 13, 216, 197, 26, 183, 54, 250, 27, 109, 140, 147, 25, 96, 105, 30, 207, 241, 8, 217, 40, 0, 35, 221, 191, 83, 132, 9, 144, 12, 91, 175, 65, 170, 149, 174, 82, 102, 167, 62, 70, 44, 143, 10, 153, 160, 142, 188, 81, 146, 212, 15, 162, 103, 163, 123, 48, 245, 116, 192, 14, 211, 126, 63, 180, 88, 155, 224, 148, 134, 158, 119, 165, 130, 112, 166, 93, 125, 1, 11, 208, 150, 100, 106, 194, 124, 2, 184, 75, 113, 104, 18, 210, 202, 111, 84, 223, 173, 238, 41, 33, 154, 47, 244, 232, 249, 60, 164, 227, 253, 56, 157, 99, 179, 6, 203, 110, 127, 152, 252, 55, 185, 73, 67, 219, 22, 156, 118, 234, 37, 193, 90, 187, 181, 23, 220, 72, 255, 58, 204, 7, 107, 239, 42, 139, 159, 95, 45, 242, 145, 172, 209, 121, 24, 21, 218, 246, 49, 46, 243, 178, 64, 161, 117, 20, 214, 17, 114, 69, 182, 85, 229, 32, 129, 29, 226, 136, 39, 36, 233, 43, 240, 254, 57, 251, 78, 51, 195, 98, 205, 108, 61, 66, 16, 213, 19, 68, 237, 190, 3, 200, 133, 80, 177, 97, 74, 138, 38, 235, 135, 186, 89, 201, 4, 101, 151, 31, 228, 231, 34, 225, 28, 222, 128, 53, 50, 247];


// console.log(nextGreaterElement(arr1, arr2));
// console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// console.log(nextGreaterElement([], [1, 2, 3, 4]));


var plusOne = function (digits) {

    if (digits[digits.length - 1] < 9) {
        digits[digits.length - 1] = digits[digits.length - 1] + 1
    } else {
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] === 9) {
                digits[i] = 0;
            } else {
                digits[i] = digits[i] + 1;
                break;
            }
            if (i === 0) {
                digits.unshift(1);
            }
        }
    }
    return digits;
};

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([0]));
// console.log(plusOne([9]));
// console.log(plusOne([2, 9]));
// console.log(plusOne([1, 1, 9]));
// console.log(plusOne([9, 9]));
// console.log(plusOne([1, 5, 9, 9]));
// console.log(plusOne([5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7, 2, 5, 8, 9]));
// console.log(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));


var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [], midNum = 0;
    if (nums1.length === 0) {
        arr = nums2;
    } else if (nums2.length === 0) {
        arr = nums1;
    } else {
        let idx1 = 0, idx2 = 0;
        while (nums1[idx1] != null || nums2[idx2] != null) {
            if (nums1[idx1] != null && nums2[idx2] != null) {
                if (nums1[idx1] < nums2[idx2]) {
                    arr.push(nums1[idx1]);
                    idx1++;
                } else if (nums1[idx1] > nums2[idx2]) {
                    arr.push(nums2[idx2]);
                    idx2++;
                } else {
                    arr.push(nums1[idx1]);
                    idx1++;
                }
            } else if (nums1[idx1]) {
                arr.push(nums1[idx1]);
                idx1++;
            } else {
                arr.push(nums2[idx2]);
                idx2++;
            }
        }
    }
    if (arr.length % 2 === 0) {
        midNum = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
    } else {
        midNum = arr[Math.floor(arr.length / 2)];
    }
    return midNum;
}

// console.log(findMedianSortedArrays([0, 111], [1, 2, 3, 120]));
// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
// console.log(findMedianSortedArrays([1], []));
// console.log(findMedianSortedArrays([], [2]));
// console.log(findMedianSortedArrays([0, 0], [0, 0]));
// console.log(findMedianSortedArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4], [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]));

var rotate = function (nums, k) {

    let newArr = [];
    if (k < nums.length) {
        newArr = nums.splice(0, nums.length - k);
    } else if (k > nums.length) {
        newArr = nums.splice(0, nums.length - (k % nums.length));
    }
    nums.push.apply(nums, newArr);
    return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([1, 2], 3));
// console.log(rotate([1, 2, 3, 4, 5], 7));
// console.log(rotate([1, 2, 3, 4, 5], 12));

var sortColors = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1;
        let temp = nums[i];
        while (j >= 0 && temp < nums[j]) {
            nums[j + 1] = nums[j];
            j = j - 1;
        }
        nums[j + 1] = temp;
    }
    return nums;
};


// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(sortColors([2, 0, 1, 2, 0, 1]));
// console.log(sortColors([2, 0, 1]));
// console.log(sortColors([1]));



let singleNumber = function (nums) {

    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }

    for (const key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }

};

// console.log(singleNumber([2, 2, 1, 1, 0]));
// console.log(singleNumber([2, 0, 1, 0, 1]));
// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([1]));


let search = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i + 1] < nums[i] && (nums[i] < target || nums[nums.length - 1] < target || target < nums[i + 1])) {
            return -1;
        }

    }
    return -1;
};


// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([1], 0));
// console.log(search([3, 1], 3));


var merge = function (nums1, m, nums2, n) {
    if (nums2.length === 0) return nums1;
    if (nums1.length === n) {
        for (let i = 0; i < nums1.length; i++) {
            nums1[i] = nums2[i];
        }
        return nums1;
    }
    idx2 = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0 && i >= m + idx2) {
            nums1[i] = nums2[idx2];
            idx2++;
        } else if (nums2[idx2] < nums1[i]) {
            for (let j = m + idx2; j > i; j--) {
                nums1[j] = nums1[j - 1];
            }
            nums1[i] = nums2[idx2];
            idx2++;
        }
    }
    return nums1;
};

// console.log(merge([1, 2, 3, 4, 6, 0, 0, 0], 5, [2, 3, 5], 3));
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));
// console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
// console.log(merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2));
// console.log(merge([1, 0], 1, [2], 1));


// let trap = function (height) {
//     let minus = 0, max = 0, counter = 0, sum = 0, secMax = 0, subCounter = 0, subMinus = 0;
//     for (let i = 0; i < height.length; i++) {
//         if (height[i] >= max) {
//             sum += Math.min(height[i], max) * counter - minus;
//             counter = 0;
//             minus = 0;
//             max = height[i];
//         } else {
//             if (secMax <= height[i]) {
//                 subCounter = counter;
//                 subMinus = minus;
//                 secMax = height[i]
//             }
//             if (i === height.length - 1) {
//                 sum += secMax * subCounter - subMinus;
//                 return sum;
//             }
//             counter++;
//             minus += height[i];
//         }
//     }
//     return sum;
// };

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2]));
// console.log(trap([4, 2, 0, 3, 2, 5]));
// console.log(trap([5, 4, 1, 2]));


var findKthLargest = function (nums, k) {

    nums.sort((a, b) => a - b)
    return nums[nums.length - k];
};

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));


var merge2 = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        if (i === intervals.length - 1) {
            return intervals;
        } else if (intervals[i][1] >= intervals[i + 1][0]) {
            intervals[i + 1][0] = Math.min(intervals[i][0], intervals[i + 1][0]);
            intervals[i + 1][1] = Math.max(intervals[i + 1][1], intervals[i][1]);
            intervals.splice(i, 1);
            i--;
        }
    }
    return intervals;
};

// console.log(merge2([[1, 3], [2, 6], [8, 10], [15, 18]]));
// console.log(merge2([[1, 4], [4, 5]]));
// console.log(merge2([[1, 4], [0, 4]]));
// console.log(merge2([[1, 4], [0, 1]]));
// console.log(merge2([[1, 4], [0, 0]]));
// console.log(merge2([[1, 4], [0, 2], [3, 5]]));
// console.log(merge2([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));


var generate = function (numRows) {
    let arr = [[1]];
    for (let i = 1; i < numRows; i++) {
        let newArr = [1]
        for (let j = 1; j <= i; j++) {
            if (j === i) {
                newArr.push(1)
            } else {
                newArr.push(arr[i - 1][j - 1] + arr[i - 1][j])
            }
        }
        arr.push(newArr)
    }
    return arr;
};

// console.log(generate(5));
// console.log(generate(2));
// console.log(generate(1));
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// let twoSum = function (numbers, target) {
//     let newArr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (target === 0 && numbers[i] === 0) {
//             newArr.push(numbers.indexOf(0) + 1, numbers.indexOf(0) + 2);
//             return newArr;
//         }
//         if (target - numbers[i] === numbers[i]) {
//             newArr.push(i + 1, i + 2);
//             return newArr;
//         }
//         if (numbers.indexOf(target - numbers[i]) != -1) {
//             newArr.push(i + 1, numbers.indexOf(target - numbers[i]) + 1);
//             return newArr;
//         }
//     }
//     return newArr;
// };

let twoSum = function (numbers, target) {
    let obj = {};
    for (let i = 0; i < numbers.length; i++) {
        if (obj[target - numbers[i]]) {
            return [obj[target - numbers[i]], i + 1];
        } else {
            obj[numbers[i]] = i + 1;
        }
    }
    return obj;
};

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 3, 4], 6));
// console.log(twoSum([-1, 0], -1));
// console.log(twoSum([0, 3, 4], 4));
// console.log(twoSum([2, 2, 4], 4));
// console.log(twoSum([-2, -2, 4], -4));
// console.log(twoSum([-3, 0, 3, 4, 90], 0));
// console.log(twoSum([0, 0, 3, 4], 0));
// console.log(twoSum([5, 25, 75], 100));


var restoreString = function (s, indices) {
    let newArr = [];
    for (let i = 0; i < indices.length; i++) {
        newArr[indices[i]] = s[i];
    }
    return newArr.join("");

    // let obj = {};
    // for (let i = 0; i < indices.length; i++) {
    //     obj[indices[i]] = s[i];
    // }

    // let str = "";

    // for (const key in obj) {
    //     str += obj[key];
    // }

    // return str;
};


console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("abc", [0, 1, 2]));