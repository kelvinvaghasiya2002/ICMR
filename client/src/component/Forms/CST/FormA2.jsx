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

function FormA2() {
  turnOffbutton();
  return (
    <div>
    <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
          <SidePanel id={"2"} />
          <div className='siteInfo'>
              <div className="formhdr">
                  <div>
                      <h2>A Socio-demographic Characteristics</h2>
                  </div>
                  <div>
                      <h3>
                      Cluster Information
                      </h3>
                  </div>
              </div>

              <div className="formcontent cont_extra">

              <DropDown className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AB1"} h3="AB.1 Block :"  />


                  <Radio h3="AB.2 Type of PSU :" CheckbobItems={["Rural", "Urban"]} name="AB2" />

                  <InputField h3="AB.3  Name of PSU (Town/Village) :" placeholder="Type here" name="AB3"  />

                  <InputField h3="AB.4 GPS Co-ordinates :" placeholder="Type here" name="AB4" />

                  <InputField h3="AB.5 Household ID Number :" placeholder="Type here" name="AB5" />

                  <Radio h3="AB.6 For how long have you been living in this city/ village with your family?" CheckbobItems={["< 1 year", "> 1 year"]} name="AB6" />

                  <h4><i>I would like to ask few questions pertaining to people staying in the same household including both family and non-family members for the last 1 year like servants included but paying guests not included.</i></h4>

                  <Buttons prev="/siteinformation" next="/linelistingofhouseholdmembers-1" prevText="Previous" nextText="Save & Next"/>
              </div>
          </div>
      </section>
      </div>
  )
}

export default FormA2