import React, { useEffect, useState } from 'react'
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

function FormA14() {
    var forma3 = setLocalStorage("forma3", { AC1: "", AC2_1: "", AC3: "", AC4: "", AC5: "", AC6_1: "", AC6_1_if: "", AC6_2: [], AC7_1: "", AC7_1_if: "", AC7_2: [], AC8_1: "", AC8_1_if: "", AC8_2: [], AC9_1: "", AC9_1_if: "", AC9_2: [], AC10_1: "", AC10_1_if: "", AC10_2: [], AC11_1: "", AC11_1_if: "", AC11_2: "", AC11_2_if: "", AC11_3: [], AC11_4: "", AC11_4_if: "", AC11_5: [], AC12_1: "", AC12_1_if: "", AC12_2: [], AC13_1: "", AC13_1_if: "", AC13_2: [], AC14_1: "", AC14_1_if: "", AC14_2: [], AC15_1: "", AC15_2: "", AC15_4: "" })

    const [formA3, setFormA3] = useState(JSON.parse(forma3))
    turnOffbutton();
    console.log(fetchCstTableDetail());

    useEffect(() => {
        if (formA3.AC14_1 === "No") {
            setFormA3((prevValue) => {
                return { ...prevValue, AC14_1_if: "", AC14_2: [] }
            })
        }
    }, [formA3.AC14_1])

    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"12"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Others
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">


                        <Radio onClick={handleChange(setFormA3)} h3="AC.14.1  Apart from the above-mentioned conditions, did anyone suffer from any other conditions that required immediate emergency services? " CheckbobItems={["Yes", "No"]} name="AC14_1" otherArray={[1, 0]} byDefault={formA3.AC14_1} setter={setFormA3} />

                        {
                            (!(formA3.AC14_1 === "No") && (formA3.AC14_1 !== "")) &&
                            <>
                                <InputField onChange={handleChange(setFormA3)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC14_1_if" value={formA3.AC14_1_if} />

                                <p style={{ fontSize: "0.8vw" }}>(<b>Note:</b> Acute Abdominal Pain, Epilepsy attack, Sudden faint, Foreign body ingestion, Infections or sepsis, Acute Hypoglycaemic attack, Severe Hypotension, loss of consciousness, Cerebromeningeal infections, acute blindness, acute fever etc.) </p>

                                <Checkbox CheckbobItems={fetchCstTableDetail()} name={"AC14_2"} h3="AC.14.2  If Yes, Could you please tell who all suffered with this condition?" setFunction={setFormA3} StateValue={formA3} array={formA3.AC14_2} />
                            </>
                        }

                        <Buttons formName={"forma3"} formData={formA3} prev="/poisoning" next="/death" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormA14