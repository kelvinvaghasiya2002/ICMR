import React from 'react'
import { Link } from 'react-router-dom'

function Buttons({ prev, next, formName, formData }) {
    const handleSubmit = () => {
        var CompleteForm = localStorage.getItem("CompleteForm");
        if (formName === "formac4") {
            var formac4 = localStorage.getItem("formac4");
            formac4 = JSON.parse(formac4)

            if (CompleteForm) {
                CompleteForm = JSON.parse(CompleteForm)
                const data = { ...CompleteForm, ...formac4 };
                localStorage.setItem("CompleteForm", JSON.stringify(data));
            } else {
                localStorage.setItem("CompleteForm", JSON.stringify(formac4))
            }
        } else {
            if (CompleteForm) {
                CompleteForm = JSON.parse(CompleteForm)
                const data = { ...CompleteForm, ...formData }
                localStorage.setItem("CompleteForm", JSON.stringify(data))
            } else {
                localStorage.setItem("CompleteForm", JSON.stringify(formData))
            }
            localStorage.setItem(formName, JSON.stringify(formData));
        }
    }

    return (
        <div className='buttons'>
            <button className='prevbtn'><Link to={prev}>Previous</Link></button>
            <button onClick={handleSubmit} className='nextbtn'><Link to={next}>Next</Link></button>
        </div>
    )
}

export default Buttons