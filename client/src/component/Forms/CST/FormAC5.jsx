import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import Radio from "../child-comp/Radio.jsx"
import SidePanel from './SidePanelCST.jsx';
import DropDown from '../child-comp/DropDown';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage.js';


function FormAC5() {
    turnOffbutton();
    var formac5 = setLocalStorage("formac5", { AC24a: "", AC24b: "" })

    const [formAC5, setFormAC5] = useState(JSON.parse(formac5))
    return (
        <section id='trauma-burns'>
            <SidePanel id={"5"} />
            <div className='siteInfo'>
                <div className="formhdr">
                    <div>
                        <h2>A Socio-demographic Characteristics</h2>
                    </div>

                    <div>
                        <h3>
                            Trauma & Burns
                        </h3>
                    </div>
                </div>
                <div className="formcontent">

                    <Radio name="AC24a" h3="In the past 1 year, did you or any member of this household suffered from sudden injury in Road Traffic Accident/ severe fall/ drowning/ stabbing/ gunshot/ any other assault/ suicidal attempt/ burns/ domestic violence/ homicidal etc. that required immediate medical service?" onClick={handleChange(setFormAC5)} CheckbobItems={["Yes", "No"]} byDefault={formAC5.AC24a} />


                    <DropDown name="AC24b" h3="could you please tell who all from your Household suffered with this condition?" dropdownItems={["Kelvin", "Prince", "Jeel"]} onClick={handleChange(setFormAC5)} byDefault={formAC5.AC24b} />

                    <Buttons formName="formac5" formData={formAC5} prev="/formsac-relationshipwithheadofhousehold" next="/formsac-stemi" />
                </div>
            </div>
        </section>
    )
}

export default FormAC5