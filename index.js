function isPalindrome(word) {
  // Write your algorithm here
  const string = word.length;
  for (let i = 0; i < string; i++) {
   if (word[i] !== word[string - 1 -i]) {
    return false
   } 
  }
  return true;
}
isPalindrome("racecar")
isPalindrome("abba")
isPalindrome("robot")
isPalindrome("a")
isPalindrome("ab")
/* 
  Add your pseudocode here
  function isPalindrome(argument, "string")
  if string is a palindrome, return true
  if not, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
