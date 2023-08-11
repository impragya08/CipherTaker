import React, { useState } from 'react';
import './Translator.css';
import { encodeToMorse, decodeFromMorse } from '../utils/morseCode';

function Translator() {
  const [text, setText] = useState('');
  const [morseCode, setMorseCode] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleEncode = () => {
    setMorseCode(encodeToMorse(text));
  };

  const handleDecode = () => {
    const decodedText = decodeFromMorse(morseCode);
    setText(decodedText);
  };

  return (
    <div className="translator">
  <textarea
    className="input-box"
    placeholder="Enter text or Morse code..."
    value={text}
    onChange={handleTextChange}
  />
  <div className="button-container">
    <button className="button" onClick={handleEncode}>
      Encode to Morse
    </button>
    <button className="button" onClick={handleDecode}>
      Decode from Morse
    </button>
  </div>
  <textarea
    className="output-box"
    placeholder="Result..."
    value={morseCode}
    readOnly
  />
</div>
  );
}

export default Translator;
