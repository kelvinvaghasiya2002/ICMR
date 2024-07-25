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

function FormE26() {
    var forme26 = setLocalStorage("forme26", { B0: "", B0_d: "", B1: "", B2: "", B3: "", B4: "", B5_dt: "", B6: "", B7: "", B8: "", B9: "", B10: "", B11_if: "", B12: "", B13: "", B14: "", B15: "", B16: "", B17_1: "", B17_2: "", B18: "", B19: "", B20: "", B21: "", B22_1: "", B22_2: "", B23_1: "", B23_2: "", B24: "", B25: "", B26: "", B27: "", B28: "", B29: "", B30: "", B31: "", B32: "", B33: "", B34: "" })
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

                        <Radio h3="E.1	Was the patient covered by any insurance?" CheckbobItems={['Yes', 'No']} name="E1" />
                        {/* <Checkbox
                            h3="E.2 If yes, which of the following Health Insurance coverage patient had?"
                            CheckbobItems={[
                                "Private cashless",
                                "Private reimbursement",
                                "Central Health Insurance Scheme (Ayushmaan Bharat/ CGHS / etc.)",
                                "State Health Insurance Scheme",
                                "Community Health Insurance Programme",
                                "None"
                            ]}
                            name="E2"
                        /> */}

                        {/* E3 new component required */}

                        <InputField h3="E.4	What was the approximate overall money spent on the availing the emergency care? (INR)" placeholder="Type here" name="E4" />


                        <Buttons formName="forme26" formData={forme26} prev="/barriers-and-facilitators2" next="/verbal-&-social-autopsy1" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormE26