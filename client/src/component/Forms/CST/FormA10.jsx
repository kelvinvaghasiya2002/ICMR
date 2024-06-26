import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import SidePanel from './SidePanelCST.jsx';
import DropDown from '../child-comp/DropDown';
import Radio from "../child-comp/Radio.jsx"
import "../Form.css"
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading.jsx';

function FormA10() {
  var forma10 = setLocalStorage("forma10", { AC10_1: "", AC10_1_if: "", AC10_2:"" })
  const [formA10, setFormA10] = useState(JSON.parse(forma10))
  turnOffbutton();
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
                      Acute Respiratory Illness
                      </h3>
                  </div>
              </div>

              <div className="formcontent cont_extra">


                  <Radio onClick={handleChange(setFormA10)} h3="AC.10.1  In the past one year, has anyone in your household experienced breathlessness with or without sudden onset of fever/ cough with expectoration/ chest pain (pleuritic)/ fast breathing/ not able to speak complete sentences/ loss of consciousness/ or chest tightness leading to suspicion of pneumonia?" CheckbobItems={["Yes", "No"]} name="AC10_1" />

                  <InputField onChange={handleChange(setFormA10)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC10_1_if"  />

                  <DropDown onClick={handleChange(setFormA10)} className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AC10_2"} h3="AC.10.2  If yes, could you please tell who all from your Household suffered with this condition?"/>

                  <Buttons prev="/stroke" next="/maternalneonatalemergency" prevText="Previous" nextText="Save & Next"/>
              </div>
          </div>
      </section>
      </div>
  )
}

export default FormA10