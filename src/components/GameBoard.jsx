import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import KeyBoard from './KeyBoard'
import Modal from './Modal'

const GameBoard = ({solution}) => {
    const {guesses,handleKeyup,isCorrect,currentGuess,count,usedKeys} = useWordle(solution)
    const [showModal,setShowModal] = useState(false)

    useEffect(() => {

        document.addEventListener('keyup' , handleKeyup)
        
        if(isCorrect){
            setTimeout(() => setShowModal(true),2000);
            console.log("hit")
            document.removeEventListener('keyup',handleKeyup)
        }

        if(count > 5){
          setTimeout(() => setShowModal(true),2000);
            console.log("hit")
            document.removeEventListener('keyup',handleKeyup)
        }


        return () => document.removeEventListener('keyup',handleKeyup)
    },[handleKeyup,isCorrect,count])
  return (
    <div>
        <Grid guesses={guesses} currentGuess={currentGuess} count={count} />
        {showModal && <Modal solution={solution} count={count} isCorrect={isCorrect} />}
        <KeyBoard usedKeys={usedKeys} handleKeyup={handleKeyup} />
    </div>
  )
}

export default GameBoard