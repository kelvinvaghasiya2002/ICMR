import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import Checkbox from '../child-comp/Checkbox';
import DropDown from '../child-comp/DropDown';
import { Link } from 'react-router-dom';
import SidePanel from './SidePanelCST';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage';
import Radio from '../child-comp/Radio';

function FormAC6() {
    const formac6 = setLocalStorage("formac6", { AC25a: "", AC25b: "" });
    turnOffbutton();
    const [formAC6, setFormAC6] = useState(JSON.parse(formac6));
    return (
        <section id='stemi'>
            <SidePanel id={"6"} />
            <div className='siteInfo'>
                <div className="formhdr">
                    <div>
                        <h2>A Socio-demographic Characteristics</h2>
                    </div>

                    <div>
                        <h3>
                            STEMI
                        </h3>
                    </div>
                </div>
                <div className="formcontent cont_extra">

                    <Radio name="AC25a" h3="In the past year, did you or any member of this household suffer from sudden onset of acute chest pain/ heaviness/ constriction/ radiation to left arms or necks or back/ breathlessness, which might have been accompanied with upper abdominal pain/ palpitation/ giddiness/ profuse sweating and easily reproduced with post-meal exertion that required immediate medical service?" CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC6)} byDefault={formAC6.AC25a} />

                    <DropDown name="AC25b" h3="could you please tell who all from your Household suffered with this condition?" dropdownItems={["Kelvin", "Prince", "Jeel"]} onClick={handleChange(setFormAC6)} byDefault={formAC6.AC25b} />

                    <Buttons formName={"formac6"} formData={formAC6}  prevText="Previous" nextText="Save & Next"  prev="/formsac-trauma&burns" next="/formsac-stroke" />
                </div>
            </div>
        </section>
    )
}

export default FormAC6