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


function FormB18() {
    var formb16 = setLocalStorage("formb16", { B0: "", B1: "", B2: "", B3: "", B4: [],  B5_dt: "", B6: "", B7: "", B8: "", B9: "", B10: "", B11_if: "", B12: "", B13: "", B14: "", B15: "", B16: "", B17_1: "",B17_2:"",B18:"", B19: "", B20: "", B21: "", B22_1: "",B22_2:"", B23_1: "",B23_2:"", B24: "", B25: "", B26: [], B27: "", B28: "", B29: "", B30: "", B31: "", B32: "", B33: "", B34: "" })
    const [formB16, setFormB16] = useState(JSON.parse(formb16))
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
                            onClick={handleChange(setFormB16)} 
                            byDefault={formB16.B15}
                        />

                        <CSTButton formName="formb16" formData={formB16} prev="/initialhealthcareseekingpathway-1" next="/initialhealthcareseekingpathway-4" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormB18
