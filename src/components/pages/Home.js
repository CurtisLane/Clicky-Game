import React from 'react'

function Home(props) {

    return (
        <div className='home-div container'>
            <div className='row'>
            {props.children}
            </div>
        </div>
    )    
}

export default Home