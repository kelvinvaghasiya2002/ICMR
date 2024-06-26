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

function FormA11() {
  var forma11 = setLocalStorage("forma11", { AC11_1: "", AC11_1_if: "", AC11_2: "", AC11_2_if: "", AC11_3: "", AC11_4: "", AC11_4_if: "", AC11_5: "" })
  const [formA11, setFormA11] = useState(JSON.parse(forma11))
  turnOffbutton();
  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"4"} />
        <div className='siteInfo'>
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
              onClick={handleChange(setFormA11)}
            />
            <InputField h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC11_1_if" />
            <Radio
              name="AC11_2"
              h3="AC.11.2  If 'Yes' to AC.11.1, did the woman or mother suffer from any condition like vaginal bleeding requiring blood transfusion, sudden increase in blood pressure, decreased urine output, loss of fetal movements, loss of consciousness, seizure, or fits before/during/after delivery?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA11)}
            />
            <InputField h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC11_2_if" />
            <DropDown h3="AC.11.3   If “Yes” to AC.11.2, could you please tell us who suffered with this condition?" dropdownItems={["< 1 year", "> 1 year"]} name="AC11_3" onClick={handleChange(setFormA11)} />
            <Radio
              name="AC11_4"
              h3="AC.11.4  If 'Yes' to AC.11.1, at the time of birth, did the newborn cry/cry late/unable to breathe/have breathing difficulty that required hospitalization or admission to SNCU/appear cold or warm (fever) to touch/refuse to breastfeed/become nonresponsive to touch/have distended abdomen or minimal or abnormal limb movements/develop bluish discoloration or jaundice/pass loose stools/or develop any other condition that required admission/hospitalization or needed any medical attention within the first month of life?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA11)}
            />
            <InputField h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC11_4_if" />
            <DropDown h3="AC.11.5  If “Yes” to AC.11.4, could you please tell us who suffered with this condition?" dropdownItems={["< 1 year", "> 1 year"]} name="AC11_5" onClick={handleChange(setFormA11)} />
            <Buttons prev="/acuterespiratoryillness" next="/snakebite" prevText="Previous" nextText="Save & Next" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA11