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

function FormA13() {
  var forma13 = setLocalStorage("forma13", { AC13_1: "", AC13_1_if: "", AC13_2:"" })
  const [formA13, setFormA13] = useState(JSON.parse(forma13))
  turnOffbutton();
  return (
    <div>
    <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
          <SidePanel id={"13"} />
          <div className='siteInfo'>
              <div className="formhdr">
                  <div>
                      <h2>A Socio-demographic Characteristics</h2>
                  </div>
                  <div>
                      <h3>
                      Poisoning
                      </h3>
                  </div>
              </div>

              <div className="formcontent cont_extra">


                  <Radio onClick={handleChange(setFormA13)} h3="AC.13.1  In the past one year, did you or anyone of your family member have a history of accidental/ intentional ingestion of poison/ ingestion or exposure to pesticides/ insecticides/ ingestion of rat poison/ poisonous seed/ phenyl any hazardous substance/ chemical substance or any other substance that could have required any sort of medical attention or treatment?" CheckbobItems={["Yes", "No"]} name="AC13_1" />

                  <InputField onChange={handleChange(setFormA13)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC13_1_if"  />

                  <DropDown onClick={handleChange(setFormA13)} className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AC13_2"} h3="AC.13.2  If Yes, Could you please tell who all suffered with this condition?"/>

                  <Buttons prev="/snakebite" next="/others" prevText="Previous" nextText="Save & Next"/>
              </div>
          </div>
      </section>
      </div>
  )
}

export default FormA13