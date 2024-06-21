
import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import SidePanel from './SidePanelCST.jsx';
import Checkbox from '../child-comp/Checkbox';
import Radio from '../child-comp/Radio';
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField.jsx';
import setLocalStorage from '../setLocalStorage.js';

function FormB18() {
  var formb18 = setLocalStorage("formb18", { B5a: "",B5b: "", B6: "", B7: "", B8: "" , B9 : "" ,B10 : "" ,B11 : "" ,B12 : "" ,B13 : ""})
  const [formB18, setFormB18] = useState(JSON.parse(formb18));
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
                <input name='B5a' type='date' onChange={handleChange(setFormB18)} value={formB18.B5a} className='blockinput' placeholder='Type here' />
              </div>
              <div>
                <h4 className='h3block'>Time:</h4>
                <input name='B5b' type='time' value={formB18.B5b} onChange={handleChange(setFormB18)} className='blockinput' placeholder='Type here' />
              </div>

            </div>

          </div>

          <Radio h3="Where did the medical emergency situation arise?  " CheckbobItems={["At home", "At work", "While travelling", "Other(specify)"]} name="B6" byDefault={formB18.B6} onClick={handleChange(setFormB18)} />

          <InputField name={"B7"} value={formB18.B7} onChange={handleChange(setFormB18)} h3="Which was the first symptom you/ or the person expressed or complaint of during emergency condition?" placeholder="Type here" />

          <InputField name={"B8"} value={formB18.B8} onChange={handleChange(setFormB18)} h3="When was the first symptom of a medical emergency recognised?" placeholder="Type here" />

          <Radio h3="At the start of symptoms was any medication taken/ given at home to alleviate symptoms?" CheckbobItems={["Yes", "No"]} name="B9" byDefault={formB18.B9} onClick={handleChange(setFormB18)} />

          <InputField name={"B10"} value={formB18.B10} onChange={handleChange(setFormB18)} h3="If yes, what medication was given?" placeholder="Type here" />

          <InputField name={"B11"} value={formB18.B11} onChange={handleChange(setFormB18)} h3="Which was the first symptom recognised as serious?" placeholder="Type here" />

          <Radio h3="Who first recognized the symptoms to be serious" CheckbobItems={["Family member", "Patient", "Others(specify)"]} name="B12" byDefault={formB18.B12} onClick={handleChange(setFormB18)} />

          <Radio h3="What was your first course of action on identifying the emergency condition?" CheckbobItems={["Visited allopathic health care facility.", "Consulted traditional healers/ spiritual healers", "Local remedy/ Self-medication at home", "AYUSH facility", "Home consultation", "Did not visit health facility"]} name="B13" byDefault={formB18.B13} onClick={handleChange(setFormB18)} />

          <Buttons formName={"formb18"} formData={formB18}  prevText="Previous" nextText="Next"  prev="/formsb-sociodemographicprofile" next="/formsb-initialhealthcareseekingpathway2" />
        </div>
      </div>
    </section>
  )
}

export default FormB18