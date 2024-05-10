import React from 'react'
import { turnOffbutton } from './helpers'
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import SidePanel from './child-comp/SidePanel';
import { Link } from 'react-router-dom';

function FormAC13() {
    turnOffbutton();
    return (
        <section id='Others'>
            <SidePanel />

            <div>
                <h2>A Socio-demographic Characteristics</h2>
            </div>

            <div>
                <h3>
                    Others
                </h3>
            </div>

            <div>
                <h3>Apart from the above-mentioned conditions, did anyone suffer from any other conditions that required immediate emergency services?</h3>
                <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-32-1"} />
                <h3>If Yes, Please Specify</h3>
                <input placeholder='Type here' />
            </div>

            <div>
                <h3>could you please tell who all suffered with this condition?</h3>
                <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-32-2"} />
            </div>
            <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-verbal&socialautopsyquestionnaire">Next</Link></button>
        </section>
    )
}

export default FormAC13