const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.'
  };
  
  export function encodeToMorse(text) {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
  }
  
  export function decodeFromMorse(morseCode) {
    const morseToChar = Object.fromEntries(Object.entries(morseCodeMap).map(([char, code]) => [code, char]));
    return morseCode.split(' ').map(code => morseToChar[code] || code).join('');
  }
  