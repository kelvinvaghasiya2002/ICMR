import React, { useState } from 'react'
import { turnOffbutton } from '../helpers'
import DropDown from '../child-comp/DropDown';
// import Checkbox from './child-comp/Checkbox';
import SidePanel from './SidePanel';
import { Link } from 'react-router-dom';
import Buttons from '../child-comp/Buttons';

function FormAC14() {
    turnOffbutton();
    const [second, setSecond] = useState(false);
    const [popup, setPopup] = useState(false);

    function handleClick(e) {
        console.log(e.target.value);
        if (e.target.value === "yes") {
            setSecond(true)
            setPopup(false)
        } else if (e.target.value === "no") {
            setPopup(true)
            setSecond(false)
        }
    }

    function handleCancel() {
        setPopup(false)
    }

    return (
        <section id='Verbal-Social-Autopsy-Questionnaire'>
            <SidePanel id={"14"}/>
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Verbal & Social Autopsy Questionnaire
                    </h3>
                </div>

                <div className='block'>
                    <h3 className='h3block'>In the last one year, did any member in your household lost his/her life due to any health emergency condition?</h3>
                    <form>
                        <div className='block'>
                            <input onClick={handleClick} type="radio" id="yez" name="ac-33-1" value="yes" />
                            <label style={{ fontWeight: "400" }} htmlFor="yes">Yes</label><br/>
                        </div>
                        <div>
                            <input onClick={handleClick} type="radio" id="no" name="ac-33-1" value="no" />
                            <label style={{ fontWeight: "400" }} htmlFor="no">No</label><br />
                        </div>
                    </form>
                </div>

                {second && <div className='block'>
                    <h3 className='h3block'>how many member in your household lost his/her life due to any health emergency condition  (Specify) </h3>
                    <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-33-2"} />
                </div>}

                {popup && <div className='popup'>
                    <h3 className='popuph3'>Form</h3>
                    <h3>Confirmation Message</h3>
                    <p>Your response have been received. </p>
                    <div className='popupbtn'>
                        <button className='cancelbtn' onClick={handleCancel}>cancel</button>
                        <button className='nextbtn'><Link 
                        style={{ color: "white" }} 
                        to="/">Submit</Link></button>
                    </div>
                </div>}
                
                <Buttons prev="/formsac-others" next="/formsac-verbal&socialautopsyquestionnaire-2" />
            </div>
        </section>
    )
}

export default FormAC14