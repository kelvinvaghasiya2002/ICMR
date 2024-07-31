import SidePanel from './SidePanelCST.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import Radio from '../child-comp/Radio.jsx';
import { Link } from 'react-router-dom';
import "../Form.css"
import React, { useEffect, useState } from 'react'
import Buttons from '../child-comp/Buttons.jsx';
import InputField from '../child-comp/InputField.jsx';
import { turnOffbutton, handleChange } from '../helpers.js';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading';
import Table from '../child-comp/Table.jsx'
import DropDown from '../child-comp/DropDown.jsx';
import Table1 from '../child-comp/Table1.jsx';

function FormF28() {
    var formf28 = setLocalStorage("formf28", { F5:"",F6:""})
    const [formF28, setFormF28] = useState(JSON.parse(formf28))
    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"28"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Verbal & Social Autopsy Questionnaire
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">
                        {/* 5 , 6 */}
                        <Radio
                            h3="F.5 What was the cause of death as per the discharge summary/doctor’s report/any medical report?"
                            CheckbobItems={[
                                "STEMI",
                                "Trauma & Burn",
                                "Stroke",
                                "Acute Respiratory Illness",
                                "Postpartum Haemorrhage & Pre-Eclampsia",
                                "Neonatal Emergency",
                                "Snake bite",
                                "Poisoning",
                                "Don’t know",
                                "Report Not Available",
                                "Others________________"
                            ]}
                            otherArray={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]}
                            name="F5"
                            byDefault={formF28.F5}
                            onClick={handleChange(setFormF28)}
                        />

                        <Radio
                            h3="F.6 Do you have the death certificate of the deceased? [If Yes, Capture the Death certificate in the tablet using Tablet cam]"
                            CheckbobItems={[
                                "Yes",
                                "No"
                            ]}
                            name="F6"
                            byDefault={formF28.F6}
                            onClick={handleChange(setFormF28)}
                        />



                        <Buttons formName="formf28" formData={formF28} prev="/verbal-&-social-autopsy1" next="/improve-emergency-services" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormF28