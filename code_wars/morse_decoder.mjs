const MORSE_CODE = {
   '.-': 'A',
   '-...': 'B',
   '-.-.': 'C',
   '-..': 'D',
   '.': 'E',
   '..-.': 'F',
   '....': 'H',
   '..': 'I',
   '.---': 'J',
   '-.-': 'K',
   '.-..': 'L',
   '--': 'M',
   '-.': 'N',
   '---': 'O',
   '.--.': 'P',
   '--.-': 'Q',
   '.-.': 'R',
   '...': 'S',
   '-': 'T',
   '..-': 'U',
   '...-': 'V',
   '.--': 'W',
   '-..-': 'X',
   '-.--': 'Y',
   '--..': 'Z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0'
}

function decode(str) {
  const splittedWords = str.split('   ')
  const translated = []
  for (const word of splittedWords) {
    const s = word.split(' ').map(letter => MORSE_CODE[letter]).join('')
    translated.push(s)
  }
  return translated.join(' ').trim()
}

const testCase = '.... . -.--   .--- ..- -.. .' // HEY JUDE

console.log(decode(testCase))
