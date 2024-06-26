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

function FormA4() {
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
                      Line listing of Household members.
                      </h3>
                  </div>
              </div>

              <div className="formcontent cont_extra">

              <DropDown className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AC21"} h3="AC.2.1  Name of the Respondent?"  />

                  <Buttons prev="/linelistingofhouseholdmembers-1" next="/linelistingofhouseholdmembers-3" prevText="previous" nextText="save & next"/>
              </div>
          </div>
      </section>
      </div>
  )
}

export default FormA4