import React from 'react'

function Header() {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Avatar Clicky Game!</a>

            <div className="mx-auto">
                {/* correct or incorrect message */}
            </div>
            
            <div className="ml-auto" id="navbar-text">
            
                <span className="navbar-text">
                    Score: {/*score*/} | Top Score: {/*topScore*/}
                </span>

            </div>
                
        </nav>
    )
}

export default Header