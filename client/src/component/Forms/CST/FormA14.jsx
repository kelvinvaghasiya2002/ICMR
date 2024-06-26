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

function FormA14() {
  var forma14 = setLocalStorage("forma14", { AC14_1: "", AC14_1_if: "", AC14_2:"" })
  const [formA14, setFormA14] = useState(JSON.parse(forma14))
  turnOffbutton();
  return (
    <div>
    <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
          <SidePanel id={"14"} />
          <div className='siteInfo'>
              <div className="formhdr">
                  <div>
                      <h2>A Socio-demographic Characteristics</h2>
                  </div>
                  <div>
                      <h3>
                      Others
                      </h3>
                  </div>
              </div>

              <div className="formcontent cont_extra">


                  <Radio onClick={handleChange(setFormA14)} h3="AC.14.1  Apart from the above-mentioned conditions, did anyone suffer from any other conditions that required immediate emergency services? " CheckbobItems={["Yes", "No"]} name="AC14_1" otherArray={[1,0]} />

                  <InputField onChange={handleChange(setFormA14)} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC14_1_if"  />

                  <p style={{fontSize:"0.8vw"}}>(<b>Note:</b> Acute Abdominal Pain, Epilepsy attack, Sudden faint, Foreign body ingestion, Infections or sepsis, Acute Hypoglycaemic attack, Severe Hypotension, loss of consciousness, Cerebromeningeal infections, acute blindness, acute fever etc.) </p>

                  <DropDown onClick={handleChange(setFormA14)} className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AC14_2"} h3="AC.14.2  If Yes, Could you please tell who all suffered with this condition?"/>

                  <Buttons prev="/poisoning" next="/death" prevText="Previous" nextText="Save & Next"/>
              </div>
          </div>
      </section>
      </div>
  )
}

export default FormA14