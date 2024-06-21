import React, { useState } from 'react'
import SidePanel from './SidePanelCST';
import { Link } from 'react-router-dom';
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import { handleChange, turnOffbutton } from '../helpers';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import setLocalStorage from '../setLocalStorage';

function FormAC7() {
    var formac7 = setLocalStorage("formac7", { AC26a: "", AC26b: "" });
    turnOffbutton();
    const [formAC7, setFormAC7] = useState(JSON.parse(formac7));
    return (
        <section id='stroke'>
            <SidePanel id={"7"} />
            <div className='siteInfo'>
                <div className="formhdr">
                    <div>
                        <h2>A Socio-demographic Characteristics</h2>
                    </div>

                    <div>
                        <h3>
                            Stroke
                        </h3>
                    </div>
                </div>

                <div className="formcontent cont_extra">
                    <Radio name="AC26a" h3={"In the past year, did you or any member of this household suffered with sudden onset of weakness, especially one side of the body/ loss of consciousness/ altered sensorium/ Imbalance/ blurred vision/ facial deviation/ drooping of eyelid/ speech abnormality with numbness and tingling sensation, or difficulty in speaking or understanding speech (aphasia), or sudden severe headache with no known cause of one's life (haemorrhagic strokes) that required immediate medical service?"} CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC7)} byDefault={formAC7.AC26a} />

                    <DropDown name="AC26b" h3="could you please tell who all from your Household suffered with this condition?" dropdownItems={["Kelvin", "Prince", "Jeel"]} onClick={handleChange(setFormAC7)} byDefault={formAC7.AC26b} />

                    <Buttons formName="formac7" formData={formAC7}  prevText="Previous" nextText="Next"  prev="/formsac-stemi" next="/formsac-acuterespiratoryillness" />
                </div>
            </div>
        </section>
    )
}

export default FormAC7