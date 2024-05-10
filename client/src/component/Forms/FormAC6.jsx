import React from 'react'
import { turnOffbutton } from './helpers'
import Checkbox from './child-comp/Checkbox';
import DropDown from './child-comp/DropDown';
import { Link } from 'react-router-dom';
import SidePanel from './child-comp/SidePanel';

function FormAC6() {
    turnOffbutton();
    return (
        <section id='stemi'>
            <SidePanel />

            <div>
                <h2>A Socio-demographic Characteristics</h2>
            </div>

            <div>
                <h3>
                    STEMI
                </h3>
            </div>

            <div>
                <h3>In the past year, did you or any member of this household suffer from sudden onset of acute chest pain/ heaviness/ constriction/ radiation to left arms or necks or back/ breathlessness, which might have been accompanied with upper abdominal pain/ palpitation/ giddiness/ profuse sweating and easily reproduced with post-meal exertion that required immediate medical service?</h3>
                <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-25-1"} />
            </div>

            <div>
                <h3>could you please tell who all from your Household suffered with this condition?</h3>
                <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-25-2"} />
            </div>
            <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-stroke">Next</Link></button>
        </section>
    )
}

export default FormAC6