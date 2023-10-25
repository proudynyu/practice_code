import { run } from './performance.mjs'

function fizzbuzz(n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        let str = ''
        if (i % 3 == 0)
            str += 'fizz'
        if (i % 5 == 0)
            str += 'buzz'
        arr.push(str.length ? str : i)
    }
    return arr
}

console.log(run(fizzbuzz, 10))
console.log(fizzbuzz(20))
console.log(fizzbuzz(15))
console.log(fizzbuzz(12))
