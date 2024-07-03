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


function FormB16() {
  var formb16 = setLocalStorage("formb16", { B0: "", B0_d: "", B1: "", B2: "", B3: "", B4: "",  B5_dt: "", B6: "", B7: "", B8: "", B9: "", B10: "", B11_if: "", B12: "", B13: "", B14: "", B15: "", B16: "", B17_1: "",B17_2:"",B18:"", B19: "", B20: "", B21: "", B22_1: "",B22_2:"", B23_1: "",B23_2:"", B24: "", B25: "", B26: "", B27: "", B28: "", B29: "", B30: "", B31: "", B32: "", B33: "", B34: "" })
  const [formB16, setFormB16] = useState(JSON.parse(formb16))
  turnOffbutton();
  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"11"} />
        <div className='siteInfo'>
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Socio-demographic profile of the patient in the HH with Emergency Condition
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <h3>Note: PART-B to be filled for each individual who were selected for emergency conditions or deaths.</h3>
            <DropDown className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"B0"} h3="B.0 When did the Patient " onClick={handleChange(setFormB16)}/>
            <InputField h3="suffered with this condition?" placeholder="Type here" name="B0_d" type={"date"} />
            <h5>Note: If emergency conditions is within ≤ 6 months, continue to B.2 else skip to next patient in the list. If none of the patient in the list had any condition under ≤ 6 months then skip to section H.</h5>
            <Radio
              h3="B.1 Marital status"
              CheckbobItems={[
                "Never married",
                "Currently Married",
                "Separated",
                "Divorced",
                "Widow",
                "Cohabitating",
                "Prefer not to disclose/ Refuse",
                "Not Applicable"
              ]}
              name="B1"
              onClick={handleChange(setFormB16)} 
              byDefault={formB16.B1}

            />
            <Radio
              h3="B.2 Level of education"
              CheckbobItems={[
                "Illiterate",
                "Primary School",
                "Middle School",
                "High School",
                "Intermediate/ Diploma",
                "Graduate",
                "Professional Degree",
                "Prefer not to disclose/ Refuse",
                "Not Applicable"
              ]}
              name="B2"
              onClick={handleChange(setFormB16)} 
              byDefault={formB16.B2}
            />
            <Radio
              h3="B.3 Occupation"
              CheckbobItems={[
                "Unemployed",
                "Housewife/ Homemaker",
                "Elementary Occupation",
                "Plant & Machine Operators and Assemblers",
                "Craft & Related Trade Workers",
                "Skilled Agricultural Fishery Workers",
                "Skilled Workers and Shop & Market Sales Workers",
                "Clerks",
                "Technicians & Associate Professionals",
                "Professionals",
                "Legislators, Senior Officers & Managers",
                "Prefer not to disclose/ Refuse",
                "Not Applicable"
              ]}
              name="B3"
              onClick={handleChange(setFormB16)}
              byDefault={formB16.B3}
            />
            {/* <Checkbox
              h3="B.4 Which of the following Health Insurance coverage you or the person with emergency condition or the deceased had?"
              CheckbobItems={[
                "Private cashless",
                "Private reimbursement",
                "Central Health Insurance Scheme (Ayushmaan Bharat/ CGHS / etc.)",
                "State Health Insurance Scheme",
                "Community Health Insurance Programme",
                "None",
                "Prefer not to disclose/ Refuse",
                "Don’t Know"
              ]}
              name="B4"
            /> */}



            <Buttons formName="formb16" formData={formB16} prev="/death" next="/initialhealthcareseekingpathway-2" prevText="Previous" nextText="Save & Next" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormB16