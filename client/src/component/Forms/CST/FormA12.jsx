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

function FormA12() {
  var forma12 = setLocalStorage("forma12", { AC12_1: "", AC12_1_if: "", AC12_2:"" })
  const [formA12, setFormA12] = useState(JSON.parse(forma12))
  turnOffbutton();
  return (
    <div>
    <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
          <SidePanel id={"12"} />
          <div className='siteInfo'>
              <div className="formhdr">
                  <div>
                      <h2>A Socio-demographic Characteristics</h2>
                  </div>
                  <div>
                      <h3>
                      Snakebite
                      </h3>
                  </div>
              </div>

              <div className="formcontent cont_extra">


                  <Radio onClick={handleChange(setFormA12)} h3="AC.12.1  In the past one year have you or anyone from your family member been bitten by a snake? " CheckbobItems={["Yes", "No"]} name="AC12_1" />

                  <InputField onChange={handleChange(setFormA12)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC12_1_if"  />

                  <DropDown onClick={handleChange(setFormA12)} className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AC12_2"} h3="AC.12.2  If “Yes”, could you please tell who all suffered with this condition?"/>

                  <Buttons prev="/maternalneonatalemergency" next="/poisoning" prevText="Previous" nextText="Save & Next"/>
              </div>
          </div>
      </section>
      </div>
  )
}

export default FormA12