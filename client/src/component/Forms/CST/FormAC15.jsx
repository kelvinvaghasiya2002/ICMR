import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelCST.jsx';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';
import Radio from "../child-comp/Radio.jsx"
import setLocalStorage from '../setLocalStorage.js';

function FormAC15() {
    var formac15 = setLocalStorage("formac15", { AC33c1: "", AC33c2: "" , AC33c3 :"" , AC33c4 :"", AC33c5 : "",AC33c6 :"",AC33c7 :"",AC33c8 :"",AC33c9 :"", })
    const [formAC15, setFormAC15] = useState(JSON.parse(formac15));
    const [popup , setPopup] = useState(false);
    function handleClick(event) {
        const v= event.target.value;
        if(v==="1" ||v==="2" ||v==="3" ||v==="4" ||v==="5" ||v==="6" ||v==="7" ||v==="8"){
            setPopup(true)
        }
    }

    function handleCancel(params) {
        setPopup(false)
    }
    turnOffbutton();
    return (
        <section id='Verbal-Social-Autopsy-Questionnaire-2'>
            <SidePanel id={"15"}/>
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Verbal & Social Autopsy Questionnaire
                    </h3>
                </div>

                <div className="formcontent cont_extra">

                <InputField name="AC33c1" h3="Name of the deceased :" placeholder="Type here" value={formAC15.AC33c1}  onChange={handleChange(setFormAC15)} />
                

                <InputField name="AC33c2" h3="Age (in Years) :" placeholder="Type here" value={formAC15.AC33c2}  onChange={handleChange(setFormAC15)} />

                <Radio name={"AC33c3"} h3={"Sex :"} CheckbobItems={["Male", "Female", "Other"]} onClick={handleChange(setFormAC15)} byDefault={formAC15.AC33c3} />

                <Radio name={"AC33c4"} h3={"Relationship with Head of the Household :"} CheckbobItems={["Head ", "Wife/Husband", "Son/Daughter", "Sister/Brother", "Sister-in Law/Brother in-law", "Niece/Nephew", "Other Relative", "Adopted/Foster/Stepchild", "Domestic servant", "Others not related", "Don’t know"]} onClick={handleChange(setFormAC15)} byDefault={formAC15.AC33c4} />

                <div className='block'>
                    <h3 className='h3block'>Date of death :</h3>
                    <input type='date' name='AC33c5' value={formAC15.AC33c5} onChange={handleChange(setFormAC15)} className='blockinput' placeholder='Type here' />
                </div>

                <Radio name={"AC33c6"} h3={"Place of death :"} CheckbobItems={["Hospital", "Home", "Workplace", "In transit to seek care"]} onClick={handleChange(setFormAC15)} byDefault={formAC15.AC33c6} />

                <InputField name="AC33c7" h3="If death in hospital, Name & Address of the Hospital :" placeholder="Type here" value={formAC15.AC33c7}  onChange={handleChange(setFormAC15)} />

                <Radio name={"AC33c8"} h3={"Type of   Hospital :"} CheckbobItems={["Public", "Private"]} onClick={handleChange(setFormAC15)} byDefault={formAC15.AC33c8} />

                <Radio name="AC33c9" h3={"What were the symptoms the deceased complained about? ( optional )"} CheckbobItems={["STEMI : Acute chest pain, heaviness or constriction, or radiation to left arms or necks or back or breathlessness, or upper abdominal pain, or palpitation, or giddiness, which might have been accompanied by profuse sweating, and easily reproduced with post-meal exertion.","Trauma & Burn : sudden injury in Road Traffic Accident/ severe fall/ drowning/ stabbing/ gunshot/ any other assault/ suicidal attempt/ burns/ domestic violence/ homicidal/ suicidal etc.","Stroke: sudden onset of weakness, especially one side of the body/ loss of consciousness/ altered sensorium/ Imbalance/ blurred vision/ facial deviation/ drooping of eyelid/ speech abnormality with numbness and tingling sensation, or difficulty in speaking or understanding speech (aphasia), or sudden severe headache with no known cause of one's life (haemorrhagic strokes).","Acute Respiratory Illness:   sudden onset of fever, or cough with expectoration, or chest pain (pleuritic) , or fast breathing, or bluish colouration of tongue or lip (cyanosis), or speaks in short sentences, or altered mentation, chest tightness or pressure, indicating a lack of oxygen.","Postpartum Haemorrhage & Pre-Eclampsia: excessive bleeding or suddenly increased blood pressure or deterioration of sensorium or generalized seizure or fits etc after delivery.","Neonatal Emergency: fever, or hypothermia, or convulsion, or any difficulty in feeding, or lethargy, or dusky colour, or cyanosis, or excessive diarrhoea, or jaundice, etc.","Snake bite","Poisoning: poisoning that leads to nausea, or vomiting, or diarrhoea, or drooling of saliva, or foaming at the mouth, or difficulty in breathing, or dilated or constricted pupils, or suddenly got faint, or seizure."]} onClick={handleChange(setFormAC15)} byDefault={formAC15.AC33c9}/>


                {popup && <div className='popup'>
                    <h3>Form</h3>
                    <h3>Confirmation Message</h3>
                    <p>Your response have been received. </p>
                    <div className='popupbtn'>
                        <button className='cancelbtn' onClick={handleCancel}>cancel</button>
                        <button className='nextbtn'><Link
                        style={{ color: "white" }}
                         to="/formsac-verbal&socialautopsyquestionnaire-3">Submit</Link></button>
                    </div>
                </div>}

                <Buttons formName={"formac15"} formData={formAC15}  prevText="Previous" nextText="Next"  prev="/formsac-verbal&socialautopsyquestionnaire" next="/formsac-verbal&socialautopsyquestionnaire-3" />
            
                </div>
            </div>
        </section>
    )
}

export default FormAC15