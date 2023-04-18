function binarySearch(arr, target, start, end) {
  const middle = Math.floor(end - start)

  if (target < arr[middle]) {
    return binarySearch(arr, target, middle + 1, end)
  }

  if (target > arr[middle]) {
    return binarySearch(arr, target, middle - 1, 0)
  }

  return middle
}

const arr = [2,5,8,12,16,23,38,56,72,91]

console.log(binarySearch(arr, 91, 0, arr.length - 1))
