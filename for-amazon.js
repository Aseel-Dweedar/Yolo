var reverseWords = function (s) {
  return (newStr = s.split(" ").reverse().join(" "));
};

// console.log(reverseWords("hello world"));
// console.log(reverseWords("hello    world"));

let longestPalindrome = function (s) {
  if (s.length && s.length < 2) {
    return s;
  }
  let low;
  let high;
  let maxlength = 1;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    low = i - 1;
    high = i + 1;
    while (high < s.length && s.charAt(i) == s.charAt(high)) {
      high++;
    }

    while (low >= 0 && s.charAt(i) == s.charAt(low)) {
      low--;
    }

    while (low >= 0 && high < s.length && s.charAt(high) == s.charAt(low)) {
      low--;
      high++;
    }

    if (maxlength < high - low - 1) {
      maxlength = high - low - 1;
      start = low + 1;
    }
  }

  return s.substring(start, start + maxlength);
};

// console.log(longestPalindrome("aseel"));
// console.log(longestPalindrome("dfrfd"));
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let isValidSudoku = function (board) {
  const setRow = new Set();
  const setCol = new Set();
  const setSub = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      const subIndex =
        Math.floor(i / 3).toString() + Math.floor(j / 3).toString();
      if (val !== ".") {
        if (
          setRow.has("r" + i + val) ||
          setCol.has("c" + j + val) ||
          setSub.has("s" + subIndex + val)
        ) {
          return false;
        } else {
          setRow.add("r" + i + val);
          setCol.add("c" + j + val);
          setSub.add("s" + subIndex + val);
        }
      }
    }
  }
  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
