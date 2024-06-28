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


function FormB18() {
    var formb18 = setLocalStorage("formb18", { B1: "", B2: "", B3: "", B4: "" })
    const [formB18, setFormB18] = useState(JSON.parse(formb18))
    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"11"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Initial Healthcare Seeking Pathway
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">
                        <Radio
                            h3="B.15 If Home visit by a doctor, then which type of doctor visited to attend the emergency patient?"
                            CheckbobItems={[
                                "Allopathic doctor",
                                "AYUSH doctor",
                                "Registered Medical Practitioner (RMP)",
                                "Non-registered Medical Practitioner",
                                "Unqualified Person",
                                "Other (Specify)"
                            ]}
                            otherArray={[0, 0, 0, 0, 0, 1]}
                            name="B15"
                            onClick={handleChange(setFormB18)} 
                        />

                        <Buttons prev="/initialhealthcareseekingpathway-1" next="/initialhealthcareseekingpathway-3" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormB18
