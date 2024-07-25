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

function FormC23() {
    var formc23 = setLocalStorage("formc23", { C20: "", C21: ""})
    const [formC23, setFormC23] = useState(JSON.parse(formc23))
    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"23"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Referral Facility
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">

                        <Radio onClick={handleChange(setFormC23)} h3="C.20  What was the final outcome of visiting the referral facility?" CheckbobItems={["Referred to higher facility", "Went against medical advice to different facility","Partially recovered & discharged","Fully Recovered & discharged","Recovered with disability & discharged","Self-Discharged","Admitted in Hospital","Death "]} name="C20" byDefault={formC23.C20} />

                        <Radio onClick={handleChange(setFormC23)} h3="C.21  What was the final diagnosis on consultation with the doctor or mentioned in the final discharge summary?" CheckbobItems={["Specify"]} otherArray={[1]} name="C21" byDefault={formC23.C21} />

                        {/* capture using tab camera */}

                        <Buttons formName="formc23" formData={formc23} prev="/referral-facility3" next="/barriers-and-facilitators1" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormC23