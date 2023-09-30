import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import cyber from '../Assets/cyber_web.jpg';

function Caesar() {
  const [inputword, setInputword] = useState('software');
  const [shiftValue, setShiftValue] = useState('3');
  const [outputword, setOutputword] = useState('');
  const [isEncryptMode, setIsEncryptMode] = useState(true);

  const caesarCipher = (word, shift, isEncrypt) => {
    let result = '';
    const shiftDirection = isEncrypt ? 1 : -1;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char.match(/[a-z]/i)) {
        const isUpperCase = char === char.toUpperCase();
        const alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
        const charIndex = alphabet.indexOf(char);
        const newIndex = (charIndex + shiftDirection * shift + 26) % 26;
        const newChar = alphabet[newIndex];
        result += newChar.toUpperCase();
      } else {
        result += char;
      }
    }
    return result;
  };

  const handleEncryptDecrypt = () => {
    const shift = parseInt(shiftValue);
    if (!isNaN(shift)) {
      const resultword = caesarCipher(inputword, shift, isEncryptMode);
      setOutputword(resultword);
    } else {
      setOutputword('Invalid shift value. Please enter a number.');
    }
  };

 const img_style = {width:'60%', height:'70%', marginLeft:'25%', marginTop :'8%', borderRadius:'10px'}
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={cyber} alt="Cyber Image" className="img-fluid" style={img_style}/>
          </div>
          <div className="col-md-6">
            <h1 style={{ color: '#46C2CB', wordAlign: 'center' }}>
              Caesar Cipher Encryption and Decryption
            </h1>
            <br></br>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="mode"
                value="encrypt"
                checked={isEncryptMode}
                onChange={() => setIsEncryptMode(true)}
              />
              <label className="form-check-label" style={{ color: '#8FD6E1' }}>
                Encrypt
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="mode"
                value="decrypt"
                checked={!isEncryptMode}
                onChange={() => setIsEncryptMode(false)}
              />
              <label className="form-check-label" style={{ color: '#8FD6E1' }}>
                Decrypt
              </label>
            </div>
            <br />
            <div className="input-width" style={{ marginTop: '1%' }}>
              <input
                type="text"
                className="form-control form-control-sm mt-2"
                placeholder="Enter word"
                value={inputword}
                onChange={(e) => setInputword(e.target.value)}
              />
            </div>
            <br />
            <div className="input-width">
              <input
                type="number"
                className="form-control form-control-sm mt-2"
                placeholder="Enter shift value"
                value={shiftValue}
                onChange={(e) => setShiftValue(e.target.value)}
              />
            </div>
            <button className="btn btn-primary mt-3" onClick={handleEncryptDecrypt}>
              Apply
            </button>
            <div className="mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                    <h5 style={{ color: '#2C74B3', marginRight: '10px' }}>
                    {(isEncryptMode ? "Encrypted" : "Decrypted")} value of
                    </h5>
                    <h5 style={{ color: '#8FD6E1', marginRight: '10px' }}>{inputword}</h5>
                </div>
                <h5 style={{ color: '#A5C9CA' }}>{outputword}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caesar;
