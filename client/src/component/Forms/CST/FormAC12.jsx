import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanel';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage';
import Radio from '../child-comp/Radio';

function FormAC12() {
    turnOffbutton();
    var formac12 = setLocalStorage("formac12", { AC31a: "", AC31b: "" })
    const [formAC12, setFormAC12] = useState(JSON.parse(formac12));
    return (
        <section id='Poisoning'>
            <SidePanel id={"12"}/>
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Poisoning
                    </h3>
                </div>

                

                <Radio name={"AC31a"} h3={"Did you or anyone from your family have history of intentional ingestion/ exposure to chemicals or any hazardous substance that led to nausea, or vomiting, or diarrhoea, or drooling of saliva, or foaming at the mouth, or difficulty in breathing, or dilated or constricted pupils, or suddenly got faint, or seizure in the last one year requiring immediate emergency medical services?"} CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC12)} byDefault={formAC12.AC31a} />

                <DropDown name={"AC31b"} h3={"could you please tell who all suffered with this condition?"} dropdownItems={["Kelvin", "Prince", "Jeel"]}  onClick={handleChange(setFormAC12)} byDefault={formAC12.AC31b} />
                
                <Buttons formName={"formac12"} formData={formAC12} prev="/formsac-snakebite" next="/formsac-others"/>
            </div>
        </section>
    )
}

export default FormAC12