/**
 * Given a string, counts the number of words inside it. Each word is separated by a single space character.
 */
function countWords(string) {
let wordNum = 0
let input = string.split(" ");
for (let i = 0; i < input.length; i++){
  if(input <= 0){
  console.log(`Empty result:`)
  }else{
    wordNum++
}
} return `${wordNum} words`;
}

console.log(countWords("This is a sentence"));
console.log(countWords("every space makes a new word"));
console.log(countWords("S p a c e s between letters count as words"));
console.log(countWords(""));

// describe('countWords', function() {
//   const assert = require("chai").assert;

//   it('should work for empty strings', function() {
//     assert.equal(countWords(""), 0);
//   });

//   it('should work for simple strings', function() {
//     assert.equal(countWords("a b c"), 3);
//     assert.equal(countWords("hello"), 1);
//     assert.equal(countWords("hello world"), 2);
//   });
// });