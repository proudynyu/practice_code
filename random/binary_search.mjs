function binarySearch(arr, target, start, end) {
  const middle = start + Math.floor((end - start) / 2)

  if (arr[middle] === target) return middle

  if (arr[middle] < target) {
    return binarySearch(arr, target,  middle + 1, end)
  }

  if (arr[middle] > target) {
    return binarySearch(arr, target, start, middle - 1)
  }
}

const arr = [2,5,8,12,16,23,38,56,72,91]

console.time('binary')
console.log(binarySearch(arr, 91, 0, arr.length - 1))
console.timeEnd('binary')


console.time('index of')
console.log(arr.indexOf(91))
console.timeEnd('index of')


console.time('for loop')
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 91) console.log(i)
  }
console.timeEnd('for loop')
