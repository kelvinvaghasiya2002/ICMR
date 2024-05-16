import SidePanel from '../child-comp/SidePanel.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import { Link } from 'react-router-dom';
import "./Form.css"
import React, { useEffect } from 'react'
import Buttons from '../child-comp/Buttons.jsx';
import InputField from '../child-comp/InputField.jsx';

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
            <SidePanel id={"1"} />
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
                <div className='block'>
                    <h3 className='h3block'>Site :</h3>
                    <Checkbox CheckbobItems={["GJBRC_CS_", "ORPUR_CS_", "MPBHS_CS_", "PBLDH_CS_", "PYPDY_CS_"]} />
                </div>


                <InputField h3="Name Of the Data Collector :" placeholder="Type here" />
                <InputField h3="Respondent ID: " placeholder="Type here" />

                <Buttons prev="/formsaa" next="/formsab" />
            </div>
        </section>
    )

}

export default Form;