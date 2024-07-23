import React, { useState , useEffect } from 'react'
import { fetchCstTableDetail, handleChange, turnOffbutton } from '../helpers'
import SidePanel from './SidePanelCST.jsx';
import DropDown from '../child-comp/DropDown';
import Radio from "../child-comp/Radio.jsx"
import "../Form.css"
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';

function FormA10() {
    var forma3 = setLocalStorage("forma3", { AC1: "", AC2_1: "", AC3: "", AC4: "", AC5: "", AC6_1: "", AC6_1_if: "", AC6_2: [], AC7_1: "", AC7_1_if: "", AC7_2: [], AC8_1: "", AC8_1_if: "", AC8_2: [], AC9_1: "", AC9_1_if: "", AC9_2: [], AC10_1: "", AC10_1_if: "", AC10_2: [], AC11_1: "", AC11_1_if: "", AC11_2: "", AC11_2_if: "", AC11_3: [], AC11_4: "", AC11_4_if: "", AC11_5: [], AC12_1: "", AC12_1_if: "", AC12_2: [], AC13_1: "", AC13_1_if: "", AC13_2: [], AC14_1: "", AC14_1_if: "", AC14_2: [], AC15_1: "", AC15_2: "", AC15_4: "" })

    const [formA3, setFormA3] = useState(JSON.parse(forma3))

    useEffect(() => {
        if (formA3.AC10_1 === "No") {
            setFormA3((prevValue) => {
                return { ...prevValue, AC10_1_if: "", AC10_2: "" }
            })
        }
    }, [formA3.AC10_1])

    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"8"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Acute Respiratory Illness
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">


                        <Radio onClick={handleChange(setFormA3)} h3="AC.10.1  In the past one year, has anyone in your household experienced breathlessness with or without sudden onset of fever/ cough with expectoration/ chest pain (pleuritic)/ fast breathing/ not able to speak complete sentences/ loss of consciousness/ or chest tightness leading to suspicion of pneumonia?" CheckbobItems={["Yes", "No"]} name="AC10_1" byDefault={formA3.AC10_1} />

                        {
                            (formA3.AC10_1 === "Yes") &&
                            <>
                                <InputField onChange={handleChange(setFormA3)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC10_1_if" value={formA3.AC10_1_if} />

                                {/* <DropDown onClick={handleChange(setFormA3)} className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AC10_2"} h3="AC.10.2  If yes, could you please tell who all from your Household suffered with this condition?" byDefault={formA3.AC10_2} /> */}

                                <Checkbox CheckbobItems={fetchCstTableDetail()} name={"AC10_2"} h3="AC.10.2  If yes, could you please tell who all from your Household suffered with this condition?"  setFunction={setFormA3} StateValue={formA3} array={formA3.AC10_2} />
                            </>
                        }

                        <Buttons formName={"forma3"} formData={formA3} prev="/stroke" next="/maternalneonatalemergency" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormA10