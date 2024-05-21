import React from 'react'
import { Link } from 'react-router-dom'

function Buttons({ prev, next, formName, formData }) {
    const handleSubmit = () => {
        var CompleteForm = localStorage.getItem("CompleteForm");
        if (CompleteForm) {
            CompleteForm = JSON.parse(CompleteForm)
            const data = {...CompleteForm , ...formData}
            localStorage.setItem("CompleteForm", JSON.stringify(data))
        } else {
            localStorage.setItem("CompleteForm", JSON.stringify(formData))
        }
        localStorage.setItem(formName, JSON.stringify(formData));
    }

    return (
        <div className='buttons'>
            <button style={{marginLeft : "1vw"}} className='prevbtn'><Link to={prev}>Previous</Link></button>
            <button style={{marginRight : "1vw"}} onClick={handleSubmit} className='nextbtn'><Link to={next}>Next</Link></button>
        </div>
    )
}

export default Buttons