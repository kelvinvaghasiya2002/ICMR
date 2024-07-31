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

function FormG29() {
    var formg29 = setLocalStorage("formg29", {G1:"" })
    const [formG29, setFormG29] = useState(JSON.parse(formg29))
    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"29"} />
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
                    
                    <InputField h3="G. Based on your experience what suggestion would you like to make to the government to improve the emergency services in your district? (Open-ended)" name="G1" placeholder="Type here"  value={formG29.G1} onChange={handleChange(setFormG29)} />

                        <Buttons formName="formg29" formData={formG29} prev="/verbal-&-social-autopsy2" next="/household-schedule1" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormG29