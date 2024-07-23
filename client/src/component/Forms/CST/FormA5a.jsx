import React, { useState } from 'react'
import setLocalStorage from '../setLocalStorage'
import { handleChange, turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading';
import SidePanel from './SidePanelCST.jsx';
import Radio from '../child-comp/Radio.jsx';
import Buttons from '../child-comp/Buttons.jsx';

function FormA5a() {
    var forma3 = setLocalStorage("forma3", { AC1: "", AC2_1: "", AC3: "", AC4: "", AC5: "", AC6_1: "", AC6_1_if: "", AC6_2: [], AC7_1: "", AC7_1_if: "", AC7_2: [], AC8_1: "", AC8_1_if: "", AC8_2: [], AC9_1: "", AC9_1_if: "", AC9_2: [], AC10_1: "", AC10_1_if: "", AC10_2: [], AC11_1: "", AC11_1_if: "", AC11_2: "", AC11_2_if: "", AC11_3: [], AC11_4: "", AC11_4_if: "", AC11_5: [], AC12_1: "", AC12_1_if: "", AC12_2: [], AC13_1: "", AC13_1_if: "", AC13_2: [], AC14_1: "", AC14_1_if: "", AC14_2: [], AC15_1: "", AC15_2: "", AC15_4: "" })

    const [formA3, setFormA3] = useState(JSON.parse(forma3))
    turnOffbutton();

    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"3"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Line listing of Household members
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">

                        <Radio
                            name="AC5"
                            h3="AC.5 In the past one year, did any member of this household have any health emergency that could have required any sort of medical attention or treatment?"
                            CheckbobItems={["Yes", "No"]}
                            onClick={handleChange(setFormA3)}
                            byDefault={formA3.AC5}
                        />

                        <Buttons formName="forma3" formData={formA3} prevText="Previous" nextText="Save & Next" prev="/linelistingofhouseholdmembers-3" next={(formA3.AC5==="Yes")?"/trauma":"/death"} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormA5a