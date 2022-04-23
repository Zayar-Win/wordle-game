import React from 'react'

const Modal = ({solution,count,isCorrect}) => {

    const clickHandler = ()  =>{
        document.location.reload()
    }

  return (
    <div className='container'>
        <div className="wrapper">
            <h1>{isCorrect ?  "Congratulations" : "Try Again"}</h1>
            <p>The answer is <span>{solution}</span></p>

            <h4>{isCorrect ? `You won the game with ${count} guess :")` : "You alrady used all guess chance." }</h4>
  
            <button onClick={clickHandler}>{isCorrect ? "Next" : "Try Again"}</button>
        </div>
    </div>
  )
}

export default Modal