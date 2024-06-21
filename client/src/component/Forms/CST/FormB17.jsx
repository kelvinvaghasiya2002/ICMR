import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelCST';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage';
import { handleChange } from '../helpers';
import Radio from '../child-comp/Radio';

export default function FormB17() {
    var formb17 = setLocalStorage("formb17", { B1: "", B2: "" , B3 : "" , B4 : ""})
    const [formB17, setFormB17] = useState(JSON.parse(formb17));
    return (
        <section>
            <SidePanel id={"17"} />
            <div className='siteInfo'>
                <div className="formhdr">
                    <div>
                        <h2>Socio-demographic profile of the patient in the HH with Emergency Condition</h2>
                    </div>
                </div>
                <div className="formcontent">

                    <Radio h3="Marital Status:" CheckbobItems={["Never married ", "Currently Married", "Separated  ", "Divorced  ", "Widow", "Cohabitating", "Prefer not to disclose/ Refuse"]} name={"B1"} onClick={handleChange(setFormB17)} byDefault={formB17.B1} />



                    <Radio h3="Level of education:" CheckbobItems={["Illiterate", "Primary School ", "Middle School", "High School", "Intermediate/ Diploma", "Graduate", "Professional Degree", "Prefer not to disclose/ Refuse"]} name={"B2"} onClick={handleChange(setFormB17)} byDefault={formB17.B2} />



                    <Radio h3="Occupation:" CheckbobItems={["Unemployed", "Unskilled Worker", "Semi-Skilled Worker", "Skilled Worker", "Clerical/ Shop/ Farm", "Semi Profession", "Professional", "Prefer not to disclose/ Refuse"]} name={"B3"} onClick={handleChange(setFormB17)} byDefault={formB17.B3} />


                    <Radio h3="Which of the following Insurance coverage you or the person with emergency condition or the deceased had?" CheckbobItems={["Private cashless", "Private reimbursement", "Central Health Insurance Scheme (Ayushman Bharat/ CGHS / etc.)", "State Health Insurance Scheme", "Community Health Insurance Programme", "None", "Prefer not to disclose/ Refuse", "Don’t Know"]} name={"B4"} onClick={handleChange(setFormB17)} byDefault={formB17.B4} />

                    <Buttons formName={"formb17"} formData={formB17}  prevText="Previous" nextText="Next"  prev="/formsac-verbal&socialautopsyquestionnaire-3" next="/formsb-initialhealthcareseekingpathway1" />
                </div>

            </div>

        </section>


    )

}