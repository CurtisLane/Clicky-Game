import React from 'react'

function Header({message, score, highScore, round}) {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Avatar Clicky Game!</a>

            <div className="mx-auto">
                {message || 'Click any image to start but DON\'T click the same image twice!'}
            </div>
            
            <div className="ml-auto" id="navbar-text">
            
                <span className="navbar-text">
                    Score: {score} | Top Score: {highScore} | Round: {round}
                </span>

            </div>
                
        </nav>
    )
}

export default Header