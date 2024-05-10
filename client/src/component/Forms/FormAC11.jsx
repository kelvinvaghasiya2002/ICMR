import React from 'react'
import { turnOffbutton } from './helpers'
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import SidePanel from './child-comp/SidePanel';
import { Link } from 'react-router-dom';
import Buttons from './child-comp/Buttons';

function FormAC11() {
    turnOffbutton();
    return (
        <section id='Snakebite'>
            <SidePanel id={"11"}/>
            <div className="siteInfo">            <div>
                <h2>A Socio-demographic Characteristics</h2>
            </div>

                <div>
                    <h3>
                        Snakebite
                    </h3>
                </div>

                <div className='block'>
                    <h3 className='h3block'>Did you or anyone from your family suffer from Snakebite in the last one year requiring immediate emergency medical services?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-30-1"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>could you please tell who all from your Household suffered with this condition?</h3>
                    <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-30-2"} />
                </div>
                
                <Buttons prev="/formsac-neonatalemergencies" next="/formsac-poisoning" />
            </div>
        </section>
    )
}

export default FormAC11