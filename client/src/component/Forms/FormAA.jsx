import React, { useEffect } from 'react'
import SidePanel from './child-comp/SidePanel.jsx';
import Checkbox from './child-comp/Checkbox.jsx';
import { Link } from 'react-router-dom';
import "./Form.css"

function Form() {
    const date = new Date();

    useEffect(() => {
        const buttons = document.getElementById("nav-buttons");
        if (buttons)
            buttons.style.display = "none"
        return () => {
            if (buttons)
                buttons.style.display = "flex"
        }
    })
    return (
        <section id='site-info'>
            <SidePanel />
            <div>
                <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
                <h3>
                    Site Information
                </h3>
            </div>
            <div>
                <p>Date & Time : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
            </div>
            <div>
                <h3>SITE :</h3>
                <Checkbox CheckbobItems={["GJBRC_CS_", "ORPUR_CS_", "MPBHS_CS_", "PBLDH_CS_", "PYPDY_CS_"]} />
            </div>
            <div>
                <h3>Name Of the Data Collector :</h3>
                <input placeholder='Type here' />
            </div>
            <div>
                <h3>Respondent ID: </h3>
                <input placeholder='Type here' />
            </div>
            <div>
                <button className='nextbtn'><Link style={{ color: "white" }} to="/formsab">Next</Link></button>
            </div>
        </section>
    )

}

export default Form;