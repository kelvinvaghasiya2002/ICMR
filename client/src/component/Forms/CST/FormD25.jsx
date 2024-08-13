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
import FormC23 from './FormC23.jsx';
import CSTButton from '../child-comp/CSTButton.jsx';

function FormD25() {
    var formd25 = setLocalStorage("formd25", { D2: [], D3: [], D4: [] })
    const [formD25, setFormD25] = useState(JSON.parse(formd25))
    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"25"} />
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
                            h3="D.2 During the last medical emergency, when you went to seek medical care what were the challenges faced."
                            CheckbobItems={[
                                "Difficulty in getting the transport to healthcare facilities",
                                "Reaching health facility not treating the condition",
                                "Unavailability of same clinicians",
                                "Long waiting period",
                                "Communication barrier",
                                "Out of pocket expenditure",
                                "Unavailability of OTC drugs",
                                "Over prescription of medicines",
                                "Doctors not taking care or visiting the patient after admission",
                                "Unnecessary investigations",
                                "Others",
                                "None of the above"
                                // other specify baaki 6
                            ]}
                            name="D2" setFunction={setFormD25} StateValue={formD25} array={formD25.D2}
                        />

                        <Checkbox
                            h3="D.3 What motivated you for seeking care or taking the patient to the healthcare facility for emergency care?"
                            CheckbobItems={[
                               "Easy accessibility",
                               "Skilled Healthcare provider",
                               "Good Professional behaviour",
                               "Insurance facility",
                               "Affordable services",
                               "Insurance Empanelled Health care facility",
                               "Good ambience of HCF",
                               "Immediate care",
                                "Others"
                                // other specify baaki 6
                            ]}
                            name="D3" setFunction={setFormD25} StateValue={formD25} array={formD25.D3}
                        />

                        <Checkbox
                            h3="D.4 While choosing a healthcare facility, what influence your decision to seek care during any health emergency conditions?"
                            CheckbobItems={[
                                "Affordability",
                                "Availability of Transport",
                                "Availability of accompanying person",
                                "Distance from facility",
                                "Time delay",
                                "Others"
                                // other specify baaki 6
                            ]}
                            name="D4" setFunction={setFormD25} StateValue={formD25} array={formD25.D4}
                        />

                        <CSTButton formName="formd25" formData={formD25} prev={(FormC23.C21==="") ?"/barriers-and-facilitators1" :"/referral-facility4"} next="/costing" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormD25