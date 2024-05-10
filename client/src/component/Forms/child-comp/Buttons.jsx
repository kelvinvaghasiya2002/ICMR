import React from 'react'
import { Link } from 'react-router-dom'

function Buttons({prev , next}) {
    return (
        <div className='buttons'>
            <button className='prevbtn'><Link to={prev}>Previous</Link></button>
            <button className='nextbtn'><Link to={next}>Next</Link></button>
        </div>
    )
}

export default Buttons