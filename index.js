function isPalindrome(word) {
  // Write your algorithm here
  const newWord = word.toLowerCase();

  let splitString = word.split("");

  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join("");

  if (joinArray === word){
return true
  }
  else {
    return false
  }
}

console.log(isPalindrome("otto"))
/* 
  Add your pseudocode here
  // intialize a function called "isPalindrome"
  // it will recieve a arguement string
  // function should return true
  // return false "if not" palindrome
*/

/*
  Add written explanation of your solution here
Step 1: Create a variable that splits the word into an array sperating every element
Step 2: Create a variable that reverses the splitstring
Step 3: Create a variable that joins the array into a string
Step 4: Create an if statement that compares JoinArray to word(parameter)
Step 5: Return true if it matches, else return false.
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
