import React from 'react'

const Row = ({guess,currentGuess}) => {

    if(guess){
           return (
                <div className='row past'>
                    {guess.map((l,i) => {
                    return (
                        <div className={l.color}  key={i}>{l.key}</div>
                    )
                })}
                </div>
           )
    }

    if(currentGuess){
        const currentArray = currentGuess.split('');
        return (
            <div className='row current'>
                {
                    currentArray.map((l,i) => (
                        <div className="filled" key={i}>{l}</div>
                    ))
                }
                {[...Array(5 - currentArray.length)].map(
                    (_, i) => (
                    <div key={i}></div>
                    )
                )}
            </div>
        )
    }

  return (
    <div className='row'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Row