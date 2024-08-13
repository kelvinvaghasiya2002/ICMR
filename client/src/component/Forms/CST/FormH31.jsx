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
import LastButton from '../child-comp/LastButton.jsx';
import CSTLastButton from '../child-comp/CSTLastButton.jsx';

function FormH31() {
    var formh31 = setLocalStorage("formh31", { H18:"" })
    const [formH31, setFormH31] = useState(JSON.parse(formh31))
    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"31"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                            Household Schedule:
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">
                       {/* 18 */}
                       <Radio
                            h3="H.18 Type of Family"
                            CheckbobItems={[
                                "Nuclear",
                                "Joint",
                                "Living alone/Single"
                            ]}
                            name="H18"
                            byDefault={formH31.H18}
                            onClick={handleChange(setFormH31)}
                        />

                        {/* <Buttons formName="formh31" formData={formH31} prev="/household-schedule1" next="" prevText="Previous" nextText="Save & Next" /> */}

                        <CSTLastButton prev="/household-schedule1" formName="formh31" formData={formH31} MainForm={"CST"}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormH31