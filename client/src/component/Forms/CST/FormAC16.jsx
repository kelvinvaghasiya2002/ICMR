import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanel';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import setLocalStorage from '../setLocalStorage';

function FormAC16() {
    turnOffbutton();
    var formac16 = setLocalStorage("formac16", { AC33c10: "", AC33c11: "" ,AC33c12 : ""})
    const [formAC16, setFormAC16] = useState(JSON.parse(formac16));
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

                <Radio  name={"AC33c10"} h3="What was the cause of death as per your knowledge/ information?" CheckbobItems={["STEMI", "Trauma & Burn", "Stroke", "Acute Respiratory Illness", "Postpartum Haemorrhage & Pre-Eclampsia", "Neonatal Emergency", "Snake bite", "Poisoning", "Others", "Don’t know"]} onClick={handleChange(setFormAC16)} byDefault={formAC16.AC33c10} />

                <Radio  name={"AC33c11"} h3="Do you have the death certificate of the deceased?" CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC16)} byDefault={formAC16.AC33c11} />

                <Radio  name={"AC33c12"} h3="What was the cause of death as per your knowledge/ information?"CheckbobItems={["STEMI", "Trauma & Burn", "Stroke", "Acute Respiratory Illness", "Postpartum Haemorrhage & Pre-Eclampsia", "Neonatal Emergency", "Snake bite", "Poisoning", "Others"]} onClick={handleChange(setFormAC16)} byDefault={formAC16.AC33c12} />

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

                <Buttons formName={"formac16"} formData={formAC16} prev="/formsac-verbal&socialautopsyquestionnaire-2" next="/formsb-sociodemographicprofile" />
                    
    
            </div>
        </section>
    )
}

export default FormAC16