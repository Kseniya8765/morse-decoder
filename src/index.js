const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const exprArr = expr.split('');
    const LETTER_LENGTH = 10;
    const ENCODING_BINARY = {
      '10': '.',
      '11': '-'
    };
    let letters = [];
    let chunk;
    // Read encoded expression by chunk of 10
    do {
      chunk = exprArr.splice(0, LETTER_LENGTH);
      // Get rid of left padded 0
      while (chunk[0] === 0) {
        chunk.shift();
      }
      // Decode letter
      if (chunk[0] === '*') {
        letters.push(' ');
      } else {
        const letterMorse = [];
        while (chunk.length) {
          const twoBits = chunk.splice(0, 2).join('');
          const dotOrDash = ENCODING_BINARY[twoBits];
          letterMorse.push(dotOrDash);
        }
        const letter = MORSE_TABLE[letterMorse.join('')];
        letters.push(letter);
      }
    } while (exprArr.length > 0);
    return letters.join('');
  }
  module.exports = {
    decode
}