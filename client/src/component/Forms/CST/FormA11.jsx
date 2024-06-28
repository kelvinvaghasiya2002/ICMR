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
import AOS from 'aos'
import 'aos/dist/aos.css'


function FormA11() {
  useEffect(()=> {
    AOS.init({duration:2000})
}, []);

  var forma3 = setLocalStorage("forma3", { AC1: "", AC2_1: "", AC3: "", AC4: "", AC5: "", AC6_1: "", AC6_1_if: "", AC6_2: "", AC7_1: "", AC7_1_if: "", AC7_2: "", AC8_1: "", AC8_1_if: "", AC8_2: "", AC9_1: "", AC9_1_if: "", AC9_2: "", AC10_1: "", AC10_1_if: "", AC10_2: "", AC11_1: "", AC11_1_if: "", AC11_2: "", AC11_2_if: "", AC11_3: "", AC11_4: "", AC11_4_if: "", AC11_5: "", AC12_1: "", AC12_1_if: "", AC12_2: "", AC13_1: "", AC13_1_if: "", AC13_2: "", AC14_1: "", AC14_1_if: "", AC14_2: "", AC15_1: "", AC15_2: "", AC15_4: "" })

  const [formA3, setFormA3] = useState(JSON.parse(forma3))
  turnOffbutton();
  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"9"} />
        <div className='siteInfo' data-aos="fade-left" >
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Maternal & Neonatal Emergency
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <Radio
              name="AC11_1"
              h3="AC.11.1  In the past one year, did any women in your household give birth to a child or had any episode of miscarriage/abortion?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA3)}
              byDefault={formA3.AC11_1}
            />
            <InputField onChange={handleChange(setFormA3)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC11_1_if" value={formA3.AC11_1_if} />
            <Radio
              name="AC11_2"
              h3="AC.11.2  If 'Yes' to AC.11.1, did the woman or mother suffer from any condition like vaginal bleeding requiring blood transfusion, sudden increase in blood pressure, decreased urine output, loss of fetal movements, loss of consciousness, seizure, or fits before/during/after delivery?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA3)}
              byDefault={formA3.AC11_2}
            />
            <InputField onChange={handleChange(setFormA3)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC11_2_if" value={formA3.AC11_2_if} />
            <DropDown h3="AC.11.3   If “Yes” to AC.11.2, could you please tell us who suffered with this condition?" dropdownItems={["< 1 year", "> 1 year"]} name="AC11_3" onClick={handleChange(setFormA3)} byDefault={formA3.AC11_3} />
            <Radio
              name="AC11_4"
              h3="AC.11.4  If 'Yes' to AC.11.1, at the time of birth, did the newborn cry/cry late/unable to breathe/have breathing difficulty that required hospitalization or admission to SNCU/appear cold or warm (fever) to touch/refuse to breastfeed/become nonresponsive to touch/have distended abdomen or minimal or abnormal limb movements/develop bluish discoloration or jaundice/pass loose stools/or develop any other condition that required admission/hospitalization or needed any medical attention within the first month of life?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA3)}
              byDefault={formA3.AC11_4}
            />
            <InputField onChange={handleChange(setFormA3)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC11_4_if" value={formA3.AC11_4_if} />
            <DropDown h3="AC.11.5  If “Yes” to AC.11.4, could you please tell us who suffered with this condition?" dropdownItems={["< 1 year", "> 1 year"]} name="AC11_5" onClick={handleChange(setFormA3)} byDefault={formA3.AC11_5}/>
            <Buttons formName={"forma3"} formData={formA3}  prev="/acuterespiratoryillness" next="/snakebite" prevText="Previous" nextText="Save & Next" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA11