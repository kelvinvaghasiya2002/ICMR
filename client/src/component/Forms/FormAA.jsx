import SidePanel from './child-comp/SidePanel.jsx';
import Checkbox from './child-comp/Checkbox.jsx';
import { Link } from 'react-router-dom';
import "./Form.css"
import React, { useEffect } from 'react'

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
            <div className='siteInfo'>
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>
                <div>
                    <h3>
                        Site Information
                    </h3>
                </div>
                <div>
                    <p className='datetime'>Date & Time : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
                </div>
                <div className='site'>
                    <h3>Site :</h3>
                    <Checkbox CheckbobItems={["GJBRC_CS_", "ORPUR_CS_", "MPBHS_CS_", "PBLDH_CS_", "PYPDY_CS_"]} />
                </div>
                <div className='dataCol'>
                    <h3>Name Of the Data Collector :</h3>
                    <input placeholder='Type here' />
                </div>
                <div className='dataCol'>
                    <h3>Respondent ID: </h3>
                    <input placeholder='Type here' />
                </div>

                <button className='nextbtn'><Link style={{ color: "white" }} to="/formsab">Next</Link></button>
            </div>
        </section>
    )

}

export default Form;