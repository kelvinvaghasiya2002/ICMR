import React, { useState } from 'react'
import { turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanel';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';

function FormAC16() {
    turnOffbutton();
    const [popup , setPopup] = useState(false)
    function handleClick() {
        setPopup(true)
    }
    function handleCancel() {
        setPopup(false)
    }
    return (
        <section id='Verbal-Social-Autopsy-Questionnaire-3'>
            <SidePanel id={"16"}/>
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Verbal & Social Autopsy Questionnaire
                    </h3>
                </div>

                <div className='block'>
                    <h3 className='h3block'>What was the cause of death as per your knowledge/ information?</h3>
                    <Checkbox CheckbobItems={["STEMI", "Trauma & Burn", "Stroke", "Acute Respiratory Illness", "Postpartum Haemorrhage & Pre-Eclampsia", "Neonatal Emergency", "Snake bite", "Poisoning", "Others", "Don’t know"]} name={"ac-33-3-10"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Do you have the death certificate of the deceased?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-33-3-11"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>What was the cause of death as per your knowledge/ information?</h3>
                    <Checkbox CheckbobItems={["STEMI", "Trauma & Burn", "Stroke", "Acute Respiratory Illness", "Postpartum Haemorrhage & Pre-Eclampsia", "Neonatal Emergency", "Snake bite", "Poisoning", "Others"]} name={"ac-33-3-12"} />
                </div>
                {popup && <div className='popup'>
                    <h3 className='popuph3'>Form</h3>
                    <h3>Confirmation Message</h3>
                    <p>Your response have been received. </p>
                    <div className='popupbtn'>
                        <button className='cancelbtn' onClick={handleCancel}>Cancel</button>
                        <button className='nextbtn'><Link 
                        style={{ color: "white" , textDecoration : "none" }} 
                        to="/">Submit</Link></button>
                    </div>
                </div>}

                <Buttons prev="/formsac-verbal&socialautopsyquestionnaire-2" next="/formsb-sociodemographicprofile" />
                    
    
            </div>
        </section>
    )
}

export default FormAC16