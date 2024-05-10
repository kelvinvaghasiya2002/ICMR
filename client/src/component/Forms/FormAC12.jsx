import React from 'react'
import { turnOffbutton } from './helpers'
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import SidePanel from './child-comp/SidePanel';
import { Link } from 'react-router-dom';

function FormAC12() {
    turnOffbutton();
    return (
        <section id='Poisoning'>
            <SidePanel />
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Poisoning
                    </h3>
                </div>

                <div className='block'> 
                    <h3 className='h3block'>Did you or anyone from your family have history of intentional ingestion/ exposure to chemicals or any hazardous substance that led to nausea, or vomiting, or diarrhoea, or drooling of saliva, or foaming at the mouth, or difficulty in breathing, or dilated or constricted pupils, or suddenly got faint, or seizure in the last one year requiring immediate emergency medical services?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-31-1"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>could you please tell who all suffered with this condition?</h3>
                    <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-31-2"} />
                </div>
                <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-others">Next</Link></button>
            </div>
        </section>
    )
}

export default FormAC12