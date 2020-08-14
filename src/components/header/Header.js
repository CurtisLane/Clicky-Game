import React from 'react'

function Header({message, score, highScore, round}) {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light row">
            <a className="navbar-brand col-12 col-lg-2 mt-lg-0" href="/">Avatar Clicky Game!</a>

            <div className="mx-auto col-12 col-lg-6 mt-2 mt-lg-0">
                {message || 'Click any image to start but DON\'T click the same image twice!'}
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