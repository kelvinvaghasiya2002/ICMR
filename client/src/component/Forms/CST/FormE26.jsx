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
import CSTButton from '../child-comp/CSTButton.jsx';

function FormE26() {
    var forme26 = setLocalStorage("forme26", { E1:"",E2:[],E3:"",E4:"" })
    const [formE26, setFormE26] = useState(JSON.parse(forme26))
    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"26"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Costing (Complete event of seeking care)
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">

                        <Radio h3="E.1	Was the patient covered by any insurance?" CheckbobItems={['Yes', 'No']} name="E1"
                        byDefault={formE26.E1}
                        onClick={handleChange(setFormE26)} />

                        <Checkbox
                            h3="E.2 If yes, which of the following Health Insurance coverage patient had?"
                            CheckbobItems={[
                                "Private cashless",
                                "Private reimbursement",
                                "Central Health Insurance Scheme (Ayushmaan Bharat/ CGHS / etc.)",
                                "State Health Insurance Scheme",
                                "Co-Payment",
                                "Community Health Insurance Programme",
                                "None"
                            ]}
                            name="E2"
                            setFunction={setFormE26} StateValue={formE26} array={formE26.E2}
                        />

                        {/* E3 new component required */}

                        <InputField h3="E.4	What was the approximate overall money spent on the availing the emergency care service? Direct Medical Cost" placeholder="Type here" name="E4"  value={formE26.E4} onChange={handleChange(setFormE26)}  />


                        <CSTButton formName="forme26" formData={formE26} prev="/barriers-and-facilitators2" next="/verbal-&-social-autopsy1" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormE26