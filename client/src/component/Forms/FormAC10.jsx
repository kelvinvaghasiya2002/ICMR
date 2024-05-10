import React from 'react'
import { turnOffbutton } from './helpers'
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import SidePanel from './child-comp/SidePanel';
import { Link } from 'react-router-dom';

function FormAC10() {
    turnOffbutton();
    return (
        <section id='Neonatal-Emergencies'>
            <SidePanel />

            <div>
                <h2>A Socio-demographic Characteristics</h2>
            </div>

            <div>
                <h3>
                    Neonatal Emergencies
                </h3>
            </div>

            <div>
                <h3>In the last one year, was there any childbirth in your household? </h3>
                <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-29-1"} />
            </div>

            <div>
                <h3>did the newborn have suffered with sudden onset of fever/ birth asphyxia or neonatal hypothermia, or convulsion, or any difficulty in feeding, or lethargy, or dusky colour, or cyanosis, or excessive diarrhoea, etc leading to immediate medical service requirement?</h3>
                <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-29-2"} />
            </div>

            <div>
                <h3>could you please tell who all from your Household suffered with this condition?</h3>
                <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-29-3"} />
            </div>
            <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-snakebite">Next</Link></button>
        </section>
    )
}

export default FormAC10