import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanel';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage';
import Radio from '../child-comp/Radio';

function FormAC8() {
    var formac8 = setLocalStorage("formac8",{AC27a : "" , AC27b : ""});
    const [formAC8 , setFormAC8] = useState(JSON.parse(formac8))
    turnOffbutton();
    return (
        <section id='Acute-Respiratory-Illness'>
            <SidePanel id={"8"}/>
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Acute Respiratory Illness
                    </h3>
                </div>

                <Radio name="AC27a" h3="In the past 1 year, did you or any member of this household suffered with sudden onset of fever, or cough with expectoration, or chest pain (pleuritic) , or fast breathing, or bluish colouration of tongue or lip (cyanosis), or speaks in short sentences, or altered mentation, chest tightness or pressure, indicating a lack of oxygen that required immediate medical service?" CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC8)} byDefault={formAC8.AC27a} />

                <DropDown name="AC27b" h3="could you please tell who all from your Household suffered with this condition?" dropdownItems={["Kelvin", "Prince", "Jeel"]} onClick={handleChange(setFormAC8)} byDefault={formAC8.AC27b} />
                
                <Buttons formName={"formac8"} formData={formAC8} prev="/formsac-stroke" next="/formsac-postpartumhaemorrhage" />
            </div>
        </section>
    )
}

export default FormAC8