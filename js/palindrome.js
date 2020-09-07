function palindrome (str) {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the comparison
  return str === str.split('').reverse().join('')
}
console.log(palindrome('racecar')); // true
console.log(palindrome('sagas')); // true
console.log(palindrome('madam')); // true

console.log(palindrome('table')); // false
console.log(palindrome('bear')); // false
console.log(palindrome('running')); // false
