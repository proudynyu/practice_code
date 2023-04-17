/* 
  * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
  
  uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
  uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

function unique_in_order(str) {
  const splitted = typeof str === 'object' ? str : str.split('')

  const uniques = []

  for (let [index, letter] of splitted.entries()) {
    if (index !== splitted.length && letter !== splitted[index + 1]) {
      uniques.push(letter)
    }
  }

  return uniques
}

console.log(unique_in_order('AAAABBBCCDAABBB'))
console.log(unique_in_order([1,2,2,3,3]))
