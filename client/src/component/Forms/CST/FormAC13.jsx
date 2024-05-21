import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanel';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';
import Radio from "../child-comp/Radio.jsx"
import setLocalStorage from '../setLocalStorage.js';

function FormAC13() {
    turnOffbutton();
    var formac13 = setLocalStorage("formac13", { AC32a: "", AC32b: "" })
    const [formAC13, setFormAC13] = useState(JSON.parse(formac13));
    return (
        <section id='Others'>
            <SidePanel id={"13"}/>
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Others
                    </h3>
                </div>

                <Radio name={"AC32a"} h3={"Apart from the above-mentioned conditions, did anyone suffer from any other conditions that required immediate emergency services?"} CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC13)} byDefault={formAC13.AC32a} />

                <DropDown name={"AC32b"} h3={"could you please tell who all suffered with this condition?"} dropdownItems={["Kelvin", "Prince", "Jeel"]} onClick={handleChange(setFormAC13)} byDefault={formAC13.AC32b} />
                
                <Buttons formName={"formac13"} formData={formAC13} prev="/formsac-poisoning" next="/formsac-verbal&socialautopsyquestionnaire" />
            </div>
        </section>
    )
}

export default FormAC13