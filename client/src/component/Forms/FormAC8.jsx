import React from 'react'
import { turnOffbutton } from './helpers'
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import SidePanel from './child-comp/SidePanel';
import { Link } from 'react-router-dom';

function FormAC8() {
    turnOffbutton();
    return (
        <section id='Acute-Respiratory-Illness'>
            <SidePanel />
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Acute Respiratory Illness
                    </h3>
                </div>

                <div className='block'>
                    <h3 className='h3block'>In the past 1 year, did you or any member of this household suffered with sudden onset of fever, or cough with expectoration, or chest pain (pleuritic) , or fast breathing, or bluish colouration of tongue or lip (cyanosis), or speaks in short sentences, or altered mentation, chest tightness or pressure, indicating a lack of oxygen that required immediate medical service?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-27-1"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>could you please tell who all from your Household suffered with this condition?</h3>
                    <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-27-2"} />
                </div>
                <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-postpartumhaemorrhage">Next</Link></button>
            </div>
        </section>
    )
}

export default FormAC8