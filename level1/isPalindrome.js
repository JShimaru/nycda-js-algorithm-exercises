/**
 * Determines whether the given string is a palindrome, i.e. if you were to reverse the order of the characters inside the string, you would get back the original string.
 */
function isPalindrome(string) {
const oWord = string;
const word = oWord.split("");
const rWord = word.reverse("");
// console.log(oWord);
// console.log(rWord.join(""));
if(oWord === rWord.join("")){
  return true;
}else{
  return false;
}
}

console.log(isPalindrome("lol"));
console.log(isPalindrome("leet"));
console.log(isPalindrome("L"));
console.log(isPalindrome("racecar"));

// describe('isPalindrome', function() {
//   const assert = require("chai").assert;

//   it('works for empty string', function() {
//     assert.isTrue(isPalindrome(''));
//   });

//   it('works for single characters', function() {
//     assert.isTrue(isPalindrome('x'));
//     assert.isTrue(isPalindrome('c'));
//   });

//   it('works for double characters', function() {
//     assert.isTrue(isPalindrome('xx'));
//     assert.isTrue(isPalindrome('gg'));
//     assert.isFalse(isPalindrome('af'));
//     assert.isFalse(isPalindrome('yt'));
//   });

//   it('works for words', function() {
//     assert.isTrue(isPalindrome('racecar'));
//     assert.isFalse(isPalindrome('potato'));
//   });
// });