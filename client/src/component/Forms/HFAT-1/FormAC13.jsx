import React from 'react'
import { turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from '../child-comp/SidePanel';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';

function FormAC13() {
    turnOffbutton();
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

                <div className='block'>
                    <h3 className='h3block'>Apart from the above-mentioned conditions, did anyone suffer from any other conditions that required immediate emergency services?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-31-1"} />
                    <h3 className='h3blockleftmg'>If Yes, Please Specify:</h3>
                    <input className='blockinput' placeholder='Type here' />
                </div>

                <div className='block'>
                    <h3 className='h3block'>could you please tell who all suffered with this condition?</h3>
                    <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-31-2"} />
                </div>
                
                <Buttons prev="/formsac-poisoning" next="/formsac-verbal&socialautopsyquestionnaire" />
            </div>
        </section>
    )
}

export default FormAC13