import SidePanel from '../child-comp/SidePanel.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import Radio from '../child-comp/Radio.jsx';
import { Link } from 'react-router-dom';
import "./Form.css"
import React, { useEffect, useState } from 'react'
import Buttons from '../child-comp/Buttons.jsx';
import InputField from '../child-comp/InputField.jsx';
import { turnOffbutton, handleChange } from '../helpers.js';
import setLocalStorage from '../setLocalStorage.js';

function Form() {
    var formaa = setLocalStorage("formaa", { AA2: "", AA3: "" })
    turnOffbutton();
    
    const date = new Date();
    const [formAA, setFormAA] = useState(JSON.parse(formaa))

    return (
        <section id='site-info'>
            <SidePanel id={"1"} />
            <div className='siteInfo'>
                <div className="formhdr">
                    <div>
                        <h2>A Socio-demographic Characteristics</h2>
                    </div>
                    <div>
                        <h3>
                            Site Information
                        </h3>
                    </div>
                </div>

                <div className="formcontent">
                    <div>
                        <p className='datetime'>Date & Time : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
                    </div>


                    <Radio h3="Site :" CheckbobItems={["GJBRC_CS_", "ORPUR_CS_", "MPBHS_CS_", "PBLDH_CS_", "PYPDY_CS_"]} name="AA2" onClick={handleChange(setFormAA)} byDefault={formAA.AA2} />

                    <InputField h3="Name Of the Data Collector :" placeholder="Type here" name="AA3" value={formAA.AA3} onChange={handleChange(setFormAA)} />

                    <InputField h3="Respondent ID: " placeholder="Type here" />

                    <Buttons formName="formaa" formData={formAA} prev="/formsaa" next="/formsab" />
                </div>
            </div>
        </section>
    )

}

export default Form;