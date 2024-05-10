import React from 'react'
import { turnOffbutton } from './helpers'
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import SidePanel from './child-comp/SidePanel';
import { Link } from 'react-router-dom';
import Buttons from './child-comp/Buttons';

function FormAC9() {
    turnOffbutton();
    return (
        <section id='Postpartum-Haemorrhage-and-Preeclampsia'>
            <SidePanel id={"9"}/>
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Postpartum Haemorrhage and Preeclampsia
                    </h3>
                </div>

                <div className='block'>
                    <h3 className='h3block'>In the past year, did any women in your household give birth to a child or had any episode of miscarriage/ abortion?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-28-1"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>If yes, did she suffer with any condition like excessive bleeding or suddenly
                        increased blood pressure or deterioration of sensorium or generalized seizure
                        or fits etc after delivery leading to immediate medical service requirement?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-28-2"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>could you please tell us who suffered with this condition?</h3>
                    <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-28-3"} />
                </div>
                
                <Buttons prev="/formsac-acuterespiratoryillness" next="/formsac-neonatalemergencies" />
            </div>
        </section>
    )
}

export default FormAC9