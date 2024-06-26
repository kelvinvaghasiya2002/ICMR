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

function FormA6() {
  var forma6 = setLocalStorage("forma6", { AC6_1: "", AC6_1_if: "", AC6_2:"" })
  const [formA6, setFormA6] = useState(JSON.parse(forma6))
  turnOffbutton();
  return (
    <div>
    <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
          <SidePanel id={"6"} />
          <div className='siteInfo'>
              <div className="formhdr">
                  <div>
                      <h2>A Socio-demographic Characteristics</h2>
                  </div>
                  <div>
                      <h3>
                      Trauma
                      </h3>
                  </div>
              </div>

              <div className="formcontent cont_extra">


                  <Radio onClick={handleChange(setFormA6)} h3="AC.6.1   In the past one year, did you or any member of this household suffered from sudden injury in Road Traffic Accident/ fracture/ severe fall/ drowning/ stabbing/ gunshot/ any other assault/ any attempt to self-harm/ domestic violence/ homicidal etc.?" CheckbobItems={["Yes", "No"]} name="AC6_1" />

                  <InputField onChange={handleChange(setFormA6)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC6_1_if"  />

                  <DropDown onClick={handleChange(setFormA6)} className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AC6_2"} h3="AC6.2   If yes, could you please tell who all from your Household suffered with this condition?"/>

                  <Buttons prev="/linelistingofhouseholdmembers-3" next="/burn" prevText="Previous" nextText="Save & Next"/>
              </div>
          </div>
      </section>
      </div>
  )
}

export default FormA6