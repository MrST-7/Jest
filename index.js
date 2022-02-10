//1.Positive sum
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
//2.Opposite number
function opposite(number) {
  if(number === 0) return 0
  return -number;
}
//3.Remove First and Last Character
function removeChar(str) {
  let result = str.substring(1, str.length - 1)
  return result
};
//4.String repeat
function repeatStr(n, s) {
  let newString = ''
  for (let i = 0; i < n; i++) {
    newString += s
  }
  return newString
}
module.exports = {
  positiveSum, opposite, removeChar, repeatStr
}
