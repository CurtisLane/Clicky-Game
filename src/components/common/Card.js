import React from 'react'

function Card({dataImage, dataPosition}) {
    return(
        <div className='card-div'>

            <div className='card'>
                <img className='card-img-top' href={dataImage} alt='Avatar' />
            </div>

        </div>
    )
    
}

export default Card