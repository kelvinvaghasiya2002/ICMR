import React from 'react'
import { turnOffbutton } from '../helpers'
import Checkbox from '../child-comp/Checkbox';
import DropDown from '../child-comp/DropDown';
import { Link } from 'react-router-dom';
import SidePanel from '../child-comp/SidePanel';
import Buttons from '../child-comp/Buttons';

function FormAC6() {
    turnOffbutton();
    return (
        <section id='stemi'>
            <SidePanel id={"6"} />
            <div className='siteInfo'>
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        STEMI
                    </h3>
                </div>

                <div className='block'>
                    <h3 className='h3block'>In the past year, did you or any member of this household suffer from sudden onset of acute chest pain/ heaviness/ constriction/ radiation to left arms or necks or back/ breathlessness, which might have been accompanied with upper abdominal pain/ palpitation/ giddiness/ profuse sweating and easily reproduced with post-meal exertion that required immediate medical service?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-25-1"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>could you please tell who all from your Household suffered with this condition?</h3>
                    <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-25-2"} />
                </div>
                
                <Buttons prev="/formsac-trauma&burns" next="/formsac-stroke"/>
            </div>
        </section>
    )
}

export default FormAC6