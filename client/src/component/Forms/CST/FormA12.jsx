import React, { useEffect, useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import SidePanel from './SidePanelCST.jsx';
import DropDown from '../child-comp/DropDown';
import Radio from "../child-comp/Radio.jsx"
import "../Form.css"
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading.jsx';

function FormA12() {
    var forma3 = setLocalStorage("forma3", { AC1: "", AC2_1: "", AC3: "", AC4: "", AC5: "", AC6_1: "", AC6_1_if: "", AC6_2: "", AC7_1: "", AC7_1_if: "", AC7_2: "", AC8_1: "", AC8_1_if: "", AC8_2: "", AC9_1: "", AC9_1_if: "", AC9_2: "", AC10_1: "", AC10_1_if: "", AC10_2: "", AC11_1: "", AC11_1_if: "", AC11_2: "", AC11_2_if: "", AC11_3: "", AC11_4: "", AC11_4_if: "", AC11_5: "", AC12_1: "", AC12_1_if: "", AC12_2: "", AC13_1: "", AC13_1_if: "", AC13_2: "", AC14_1: "", AC14_1_if: "", AC14_2: "", AC15_1: "", AC15_2: "", AC15_4: "" })

    const [formA3, setFormA3] = useState(JSON.parse(forma3))
    turnOffbutton();

    useEffect(() => {
        if (formA3.AC12_1 === "No") {
            setFormA3((prevValue) => {
                return { ...prevValue, AC12_1_if: "", AC12_2: "" }
            })
        }
    }, [formA3.AC12_1])

    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"10"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Snakebite
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">


                        <Radio onClick={handleChange(setFormA3)} h3="AC.12.1  In the past one year have you or anyone from your family member been bitten by a snake? " CheckbobItems={["Yes", "No"]} name="AC12_1" byDefault={formA3.AC12_1} />

                        {
                            (formA3.AC12_1 === "Yes") &&
                            <>
                                <InputField onChange={handleChange(setFormA3)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC12_1_if" value={formA3.AC12_1_if} />

                                <DropDown onClick={handleChange(setFormA3)} className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AC12_2"} h3="AC.12.2  If “Yes”, could you please tell who all suffered with this condition?" byDefault={formA3.AC12_2} />
                            </>
                        }

                        <Buttons formName={"forma3"} formData={formA3} prev="/maternalneonatalemergency" next="/poisoning" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormA12