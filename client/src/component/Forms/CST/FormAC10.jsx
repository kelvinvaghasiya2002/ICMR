import React,{useState} from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelCST.jsx';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage';
import Radio from "../child-comp/Radio.jsx"

function FormAC10() {
    turnOffbutton();
    var formac10 = setLocalStorage("formac10", { AC29a: "", AC29b: "", AC29c: "" })
    const [formAC10, setFormAC10] = useState(JSON.parse(formac10));
    return (
        <section id='Neonatal-Emergencies'>
            <SidePanel id={"10"}/>
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Neonatal Emergencies
                    </h3>
                </div>

                
                <Radio name={"AC29a"} h3="In the last one year, was there any childbirth in your household?" CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC10)} byDefault={formAC10.AC29a} />

                <Radio name={"AC29b"} h3="did the newborn have suffered with sudden onset of fever/ birth asphyxia or neonatal hypothermia, or convulsion, or any difficulty in feeding, or lethargy, or dusky colour, or cyanosis, or excessive diarrhoea, etc leading to immediate medical service requirement?" CheckbobItems={["Yes", "No"]} onClick={handleChange(setFormAC10)} byDefault={formAC10.AC29b} />

                <DropDown name={"AC29c"} h3={"could you please tell who all from your Household suffered with this condition?"}  dropdownItems={["Kelvin", "Prince", "Jeel"]} onClick={handleChange(setFormAC10)}  byDefault={formAC10.AC29c}/>
                
                <Buttons formName={"formac10"} formData={formAC10} prev="/formsac-postpartumhaemorrhage" next="/formsac-snakebite" />
            </div>
        </section>
    )
}

export default FormAC10