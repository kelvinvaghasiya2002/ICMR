import React, { useState } from 'react'
import { turnOffbutton } from './helpers'
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import SidePanel from './child-comp/SidePanel';
import { Link } from 'react-router-dom';

function FormAC15() {
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
            <SidePanel />
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
                    <h3 className='h3block'>Name of the deceased :</h3>
                    <input className='blockinput' placeholder='Type here' />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Age (in Years) :</h3>
                    <input className='blockinput' placeholder='Type here' />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Sex :</h3>
                    <Checkbox CheckbobItems={["Male", "Female", "Other"]} name={"ac-33-3-3"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Relationship with Head of the Household :</h3>
                    <Checkbox CheckbobItems={["Head ", "Wife/Husband", "Son/Daughter", "Sister/Brother", "Sister-in Law/Brother in-law", "Niece/Nephew", "Other Relative", "Adopted/Foster/Stepchild", "Domestic servant", "Others not related", "Don’t know"]} name={"ac-33-3-4"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Date of death :</h3>
                    <input type='date' className='blockinput' placeholder='Type here' />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Place of death :</h3>
                    <Checkbox CheckbobItems={["Hospital", "Home", "Workplace", "In transit to seek care"]} name={"ac-33-3-6"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>If death in hospital, Name & Address of the Hospital :</h3>
                    <input className='blockinput' placeholder='Type here' />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Type of   Hospital :</h3>
                    <Checkbox CheckbobItems={["Public", "Private"]} name={"ac-33-3-8"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>What were the symptoms the deceased complained about? ( optional )</h3>
                    <form>
                        <div className='radiobtn'>
                            <input onClick={handleClick} type="radio" id="1" name="ac-33-9" value="1" />
                            <div>
                            <label style={{ fontWeight: "400" }} htmlFor="1"><b>STEMI : </b>Acute chest pain, heaviness or constriction, or radiation to left arms or necks or back or breathlessness, or upper abdominal pain, or palpitation, or giddiness, which might have been accompanied by profuse sweating, and easily reproduced with post-meal exertion.</label></div><br />
                        </div>
                        <div className='radiobtn'>
                            <input onClick={handleClick} type="radio" id="2" name="ac-33-9" value="2" />
                            <div>
                            <label style={{ fontWeight: "400" }} htmlFor="2"><b>Trauma & Burn :</b> sudden injury in Road Traffic Accident/ severe fall/ drowning/ stabbing/ gunshot/ any other assault/ suicidal attempt/ burns/ domestic violence/ homicidal/ suicidal etc.</label>
                            </div><br />
                        </div>
                        <div className='radiobtn'>
                            <input onClick={handleClick} type="radio" id="3" name="ac-33-9" value="3" />
                            <div>
                            <label style={{ fontWeight: "400" }} htmlFor="3"><b>Stroke:</b> sudden onset of weakness, especially one side of the body/ loss of consciousness/ altered sensorium/ Imbalance/ blurred vision/ facial deviation/ drooping of eyelid/ speech abnormality with numbness and tingling sensation, or difficulty in speaking or understanding speech (aphasia), or sudden severe headache with no known cause of one's life (haemorrhagic strokes).</label>
                            </div><br />
                        </div>
                        <div className='radiobtn'>
                            <input onClick={handleClick} type="radio" id="4" name="ac-33-9" value="4" />
                            <div>
                            <label style={{ fontWeight: "400" }} htmlFor="4"><b>Acute Respiratory Illness:</b>   sudden onset of fever, or cough with expectoration, or chest pain (pleuritic) , or fast breathing, or bluish colouration of tongue or lip (cyanosis), or speaks in short sentences, or altered mentation, chest tightness or pressure, indicating a lack of oxygen.</label></div><br />
                        </div>
                        <div className='radiobtn'>
                            <input onClick={handleClick} type="radio" id="5" name="ac-33-9" value="5" />
                            <div>
                            <label style={{ fontWeight: "400" }} htmlFor="5"><b>Postpartum Haemorrhage & Pre-Eclampsia:</b> excessive bleeding or suddenly increased blood pressure or deterioration of sensorium or generalized seizure or fits etc after delivery.</label></div><br />
                        </div>
                        <div className='radiobtn'>
                            <input onClick={handleClick} type="radio" id="6" name="ac-33-9" value="6" />
                            <div>
                            <label style={{ fontWeight: "400" }} htmlFor="6"><b>Neonatal Emergency:</b> fever, or hypothermia, or convulsion, or any difficulty in feeding, or lethargy, or dusky colour, or cyanosis, or excessive diarrhoea, or jaundice, etc.</label></div><br />
                        </div>
                        <div className='radiobtn'>
                            <input onClick={handleClick} type="radio" id="7" name="ac-33-9" value="7" />
                            <div>
                            <label style={{ fontWeight: "400" }} htmlFor="7"><b>Snake bite</b></label></div><br />
                        </div>
                        <div className='radiobtn'>
                            <input onClick={handleClick} type="radio" id="8" name="ac-33-9" value="8" />
                            <div>
                            <label style={{ fontWeight: "400" }} htmlFor="8"><b>Poisoning:</b> poisoning that leads to nausea, or vomiting, or diarrhoea, or drooling of saliva, or foaming at the mouth, or difficulty in breathing, or dilated or constricted pupils, or suddenly got faint, or seizure.</label></div><br />
                        </div>
                    </form>
                </div>

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

                <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-verbal&socialautopsyquestionnaire-3">Next</Link></button>
            </div>
        </section>
    )
}

export default FormAC15