import React ,{useState} from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelCST';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import setLocalStorage from '../setLocalStorage';


function FormAC11() {
    turnOffbutton();
    var formac11 = setLocalStorage("formac11", { AC30a: "", AC30b: "" })
    const [formAC11, setFormAC11] = useState(JSON.parse(formac11));
    return (
        <section id='Snakebite'>
            <SidePanel id={"11"} />
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Snakebite
                    </h3>
                </div>

                <Radio name={"AC30a"} h3={"Did you or anyone from your family suffer from Snakebite in the last one year requiring immediate emergency medical services?"} CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC11)} byDefault={formAC11.AC30a} />

                <DropDown name={"AC30b"} h3={"could you please tell who all from your Household suffered with this condition?"} dropdownItems={["Kelvin", "Prince", "Jeel"]}  onClick={handleChange( setFormAC11)} byDefault={formAC11.AC30b} />

                <Buttons formName={"formac11"} formData={formAC11} prev="/formsac-neonatalemergencies" next="/formsac-poisoning" />
            </div>
        </section>
    )
}

export default FormAC11