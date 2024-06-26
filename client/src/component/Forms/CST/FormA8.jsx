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

function FormA8() {
  var forma8 = setLocalStorage("forma8", { AC8_1: "", AC8_1_if: "", AC8_2:"" })
  const [formA8, setFormA8] = useState(JSON.parse(forma8))
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
                      STEMI
                      </h3>
                  </div>
              </div>

              <div className="formcontent cont_extra">


                  <Radio onClick={handleChange(setFormA8)} h3="AC.8.1  In the past one year, has anyone in your household had a history of heart attack or sudden onset of acute chest pain/ heaviness/ constriction, with possible radiation to the left arm, neck, or back, associated with symptoms such as upper abdominal pain/ palpitations/ dizziness/ profuse sweating, and exacerbated by exertion after meals?" CheckbobItems={["Yes", "No"]} name="AC8_1" />

                  <InputField onChange={handleChange(setFormA8)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC8_1_if"  />

                  <DropDown onClick={handleChange(setFormA8)} className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AC8_2"} h3="AC.8.2  If yes, could you please tell who all from your Household suffered with this condition?"/>

                  <Buttons prev="/burn" next="/stroke" prevText="Previous" nextText="Save & Next"/>
              </div>
          </div>
      </section>
      </div>
  )
}

export default FormA8