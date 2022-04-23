import React from 'react'
import Row from './Row'

const Grid = ({guesses,currentGuess,count}) => {
  return (
    <div>
        {
            guesses.map((g,i) => {
                if(count === i){
                    return (
                        <Row key={i} currentGuess={currentGuess} />
                    )
                }

                return <Row key={i} guess={g} />
            })
        }
    </div>
  )
}

export default Grid