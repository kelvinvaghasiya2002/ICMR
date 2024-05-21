import React from 'react'
import { turnOffbutton } from '../helpers'
import SidePanel from './SidePanel.jsx';
import Checkbox from '../child-comp/Checkbox';
import Radio from '../child-comp/Radio';
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField.jsx';

function FormB18() {
  turnOffbutton()
  return (
    <section>
      <SidePanel id={"18"} />
      <div className="siteInfo">

        <div className="formhdr">

          <div>
            <h2>Socio-demographic   profile of the patient in the HH with Emergency Condition</h2>
          </div>

          <div>
            <h3>
              Initial Healthcare Seeking Pathway
            </h3>
          </div>

        </div>

        <div className="formcontent">

          <div className='block'>
            <h3 className='h3block'>When did this incident take place?  </h3>
            <div className='dateTimeBox'>
              <div>
                <h4 className='h3block'>Date:</h4>
                <input type='date' className='blockinput' placeholder='Type here' />
              </div>
              <div>
                <h4 className='h3block'>Time:</h4>
                <input type='time' className='blockinput' placeholder='Type here' />
              </div>

            </div>

          </div>

          <Radio h3="Where did the medical emergency situation arise?  " CheckbobItems={["At home", "At work", "While travelling","Other(specify)"]} name="B-6" />

          <InputField h3="Which was the first symptom you/ or the person expressed or complaint of during emergency condition?" placeholder="Type here" />

          <InputField h3="When was the first symptom of a medical emergency recognised?" placeholder="Type here" />

          <Radio h3="At the start of symptoms was any medication taken/ given at home to alleviate symptoms?" CheckbobItems={["Yes", "No"]} name="B-9" />

          <InputField h3="If yes, what medication was given?" placeholder="Type here" />

          <InputField h3="Which was the first symptom recognised as serious?" placeholder="Type here" />

          <Radio h3="Who first recognized the symptoms to be serious" CheckbobItems={["Family member", "Patient","Others(specify)"]} name="B-12" />

          <Radio h3="What was your first course of action on identifying the emergency condition?" CheckbobItems={["Visited allopathic health care facility.", "Consulted traditional healers/ spiritual healers","Local remedy/ Self-medication at home","AYUSH facility", "Home consultation","Did not visit health facility"]} name="B-13" />

          <Buttons prev="/formsb-sociodemographicprofile" next="/formsb-initialhealthcareseekingpathway2" />
        </div>
      </div>
    </section>
  )
}

export default FormB18