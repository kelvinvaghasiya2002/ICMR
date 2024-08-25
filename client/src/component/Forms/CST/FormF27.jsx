import SidePanel from './SidePanelCST.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import Radio from '../child-comp/Radio.jsx';
import { Link } from 'react-router-dom';
import "../Form.css"
import React, { useEffect, useState } from 'react'
import Buttons from '../child-comp/Buttons.jsx';
import InputField from '../child-comp/InputField.jsx';
import { turnOffbutton, handleChange } from '../helpers.js';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading';
import Table from '../child-comp/Table.jsx'
import DropDown from '../child-comp/DropDown.jsx';
import Table1 from '../child-comp/Table1.jsx';
import CSTButton from '../child-comp/CSTButton.jsx';

function FormF27() {
    var formf27 = setLocalStorage("formf27", { F1: "", F2: "", F3: "", F4: "" })
    const [formF27, setFormF27] = useState(JSON.parse(formf27))
    turnOffbutton();

    useEffect(() => {
        if (formF27.F2 !== "Hospital") {
          setFormF27({ ...formF27, F3: "", F4: "" })
        }
    
      }, [formF27.F2])
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"27"} />
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Verbal & Social Autopsy Questionnaire
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">
                        <InputField h3="F.1 Date of death:" type={'datetime-local'} name="F1" value={formF27.F1} onChange={handleChange(setFormF27)}/>
                        <Radio
                            h3="F.2 Place of death"
                            CheckbobItems={[
                                "Hospital",
                                "Home",
                                "Workplace",
                                "In transit to seek care",
                            ]}
                            otherArray={[0, 0, 0, 0, 1]}
                            name="F2"
                            byDefault={formF27.F2}
                            onClick={handleChange(setFormF27)}
                        />
{/* 
                        {
                            (formF27.F2 === "Hospital") &&
                            <> */}

                                <InputField h3="F.3	If death in hospital, Name & Address of the Hospital" name="F3" value={formF27.F3} onChange={handleChange(setFormF27)} />

                                <Radio
                                    h3="F.4 Type of Hospital"
                                    CheckbobItems={[
                                        "Public",
                                        "Private"
                                    ]}
                                    name="F4"
                                    byDefault={formF27.F4}
                                    onClick={handleChange(setFormF27)}
                                />

                            {/* </>
                        } */}

                        <CSTButton formName="formf27" formData={formF27} prev="/costing" next="/verbal-&-social-autopsy2" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormF27