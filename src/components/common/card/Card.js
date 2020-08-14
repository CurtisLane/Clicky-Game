import React from 'react'
import './Card.css'

function Card({id, name, image}) {
    return(
        <div className='col-4 col-md-3 my-3'>

            <div className='card'>
                <div className='img-container'>
                    <img className='card-img-top img-fluid rounded' src={image} alt={name} />
                </div>
            </div>

        </div>
    )
    
}

export default Card