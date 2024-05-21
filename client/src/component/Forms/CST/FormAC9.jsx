import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelCST';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage';
import Radio from '../child-comp/Radio';

function FormAC9() {
    var formac9 = setLocalStorage("formac9", { AC28a: "", AC28b: "", AC28c: "" })
    const [formAC9, setFormAC9] = useState(JSON.parse(formac9));
    turnOffbutton();
    return (
        <section id='Postpartum-Haemorrhage-and-Preeclampsia'>
            <SidePanel id={"9"} />
            <div className="siteInfo">
                <div className="formhdr">
                    <div>
                        <h2>A Socio-demographic Characteristics</h2>
                    </div>

                    <div>
                        <h3>
                            Postpartum Haemorrhage and Preeclampsia
                        </h3>
                    </div>

                </div>

                <div className="formcontent">
                    <Radio name="AC28a" h3="In the past year, did any women in your household give birth to a child or had any episode of miscarriage/ abortion?" CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC9)} byDefault={formAC9.AC28a} />

                    <Radio name="AC28b" h3="If yes, did she suffer with any condition like excessive bleeding or suddenly
        increased blood pressure or deterioration of sensorium or generalized seizure
        or fits etc after delivery leading to immediate medical service requirement?" CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC9)} byDefault={formAC9.AC28b} />

                    <DropDown name="AC28c" h3="could you please tell us who suffered with this condition?" dropdownItems={["Kelvin", "Prince", "Jeel"]} onClick={handleChange(setFormAC9)} byDefault={formAC9.AC28c} />

                    <Buttons formName="formac9" formData={formAC9} prev="/formsac-acuterespiratoryillness" next="/formsac-neonatalemergencies" />
                </div>
            </div>
        </section>
    )
}

export default FormAC9