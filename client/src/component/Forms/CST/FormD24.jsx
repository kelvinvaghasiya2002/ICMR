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

function FormD24() {
    var formd24 = setLocalStorage("formd24", { D1: []})
    const [formD24, setFormD24] = useState(JSON.parse(formd24))
    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"24"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                            Barriers and facilitators in seeking care
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">
                       
                    <Checkbox
                            h3="D.1  Why did you NOT seek medical care at the facility during the emergency?"
                            CheckbobItems={[
                                "Lack of severity of symptoms",
                                "Bad previous experience",
                                "High cost of medical care",
                                "Distant healthcare facilities",
                                "Non-availability of transport",
                                "Dissuaded by family/ friend/ neighbour",
                                "Absence of accompanying member",
                                "Doctors not taking care or visiting the patient after admission",
                                "Unavailability of OTC drugs",
                                "Over prescription of medicines",
                                "Unnecessary investigations",
                                "Cultural barrier",
                                "Linguistic barrier",
                                "Lack of trust",
                                "Others"
                                // other specify baaki 6
                            ]}
                            name="D1" setFunction={setFormD24} StateValue={formD24} array={formD24.D1} 
                        />

                        <Buttons formName="formd24" formData={formd24} prev="/referral-facility4" next="/barriers-and-facilitators2" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormD24