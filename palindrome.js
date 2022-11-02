let str = "naman";

function checkPalindrome(str) {
  let bag = "";
  for (let i = str.length - 1; i >= 0; i--) {
    bag += str[i];
  }

  if (bag == str) {
    console.log("Given String is Palindrome");
  } else {
    console.log("Given String not is Palindrome");
  }
}

checkPalindrome(str);