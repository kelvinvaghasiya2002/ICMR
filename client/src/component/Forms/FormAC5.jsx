import React from 'react'
import { turnOffbutton } from './helpers'
import SidePanel from './child-comp/SidePanel';
import Checkbox from './child-comp/Checkbox';
import DropDown from './child-comp/DropDown';
import { Link } from 'react-router-dom';


function FormAC5() {
    turnOffbutton();
    return (
        <section id='trauma-burns'>
            <SidePanel />
            <div className='siteInfo'>
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Trauma & Burns
                    </h3>
                </div>

                <div className='block'>
                    <h3 className='h3block'>In the past 1 year, did you or any member of this household suffered from sudden injury in Road Traffic Accident/ severe fall/ drowning/ stabbing/ gunshot/ any other assault/ suicidal attempt/ burns/ domestic violence/ homicidal etc. that required immediate medical service?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-24-1"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>could you please tell who all from your Household suffered with this condition?</h3>
                    <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-24-2"} />
                </div>
                <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-stemi">Next</Link></button>
            </div>
        </section>
    )
}

export default FormAC5