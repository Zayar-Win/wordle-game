import React, { useEffect, useState } from 'react'

const KeyBoard = ({usedKeys,handleKeyup}) => {

  const [letters,setLetters] = useState(null)
  const isDark = true;

  useEffect(() => {
    fetch('http://localhost:3008/keys')
      .then(data => data.json())
      .then(result => setLetters(result) )
  },[])

  const clickHandler = (l) => {
    handleKeyup(l)
  }
  
  return (
    <div className='keyboard'>
      {
        letters &&letters.map((l) => {
           const color = usedKeys[l.key];
           const isBig = l.key === "Enter" || l.key === "Backspace"
           return(
             <div key={l.key} style={{ color : `${isDark ? 'black' : ""}` }} className={`${isBig ? "big" : ""} ${color}`} onClick={() => clickHandler(l)}>{l.key}</div>
           )
        })
      }
    </div>
  )
}

export default KeyBoard