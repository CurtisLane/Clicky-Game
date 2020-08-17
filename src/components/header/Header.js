import React from 'react'
import './header.css'

function Header({message, score, highScore, round, gameOver, wonRound}) {
    return(

        <nav className={"navbar navbar-expand-lg navbar-light row " + (gameOver === true ? 'blink-bg' : wonRound === true ? 'blink-bg-win' : 'bg-light')}>
            <a className="navbar-brand col-12 col-lg-2 mt-lg-0" href="/">Avatar Clicky Game!</a>

            <div className="mx-auto col-12 col-lg-6 mt-2 mt-lg-0">
                <strong>{message || 'Click any image to start but DON\'T click the same image twice!'}</strong>
            </div>
            
            <div className="ml-auto col-12 col-lg-4 mt-1 mt-lg-0" id="navbar-text">
            
                <span className="navbar-text">
                    Score: {score} | Top Score: {highScore} | Round: {round}
                </span>

            </div>
                
        </nav>
    )
}

export default Header