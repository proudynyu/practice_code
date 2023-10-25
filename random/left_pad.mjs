function left_pad(str, len, pad) {
    let str_len = str.length;
    let pads = len - str_len;
    console.log(pads)

    if (pads > 0)
        return Array(pads).fill(" ").join("") + str;
    return str
}

const str = "testing"

console.log(left_pad(str, 7), str)
console.log(left_pad(str, 8))
console.log(left_pad(str, 6))

