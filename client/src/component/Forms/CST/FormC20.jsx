import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import Radio from '../child-comp/Radio';
import SidePanel from '../child-comp/SidePanel';
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField.jsx';
import setLocalStorage from '../setLocalStorage.js';

function FormC20() {
  turnOffbutton()
  var formc20 = setLocalStorage("formc20", { C1: "", C2: "", C3: "", C4: "", C5: "", C6: "", C7: "", C8: "", C9: "", C10: "", C11: "", C12: "", C13: "", C14: "", C15: "", C16: "", C17: "", C18: "", C19: "" })
    const [formC20, setFormC20] = useState(JSON.parse(formc20));
  return (
    <section>
      <SidePanel id={"20"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Referral Facility
            </h3>
          </div>

        </div>

        <div className="formcontent">

          <Radio h3="Who took the decision to refer/ shift the patient to another facility? " CheckbobItems={["Medical team", "Self/family", "Others(specify)"]} name="C1" onClick={handleChange(setFormC20)} byDefault={formC20.C1} />

          <Radio h3="If referral was suggested by the medical team, what was the reason given for referral? (Select all that apply)" CheckbobItems={["Serious illness requiring higher centre", "Unavailability of doctor", "Unavailability of specialist", "Medicines unavailable", "Admission facility unavailable", "Unavailability of bed", "Inappropriate staff behaviour", "Others(specify)"]} name="C2" onClick={handleChange(setFormC20)} byDefault={formC20.C2} />

          <Radio h3="Which facility were you referred?" CheckbobItems={["SC/HWC", "PHC", "CHC", "District Headquarter Hospital/ Equivalent Facility", "Medical College", "Private hospital", "Private clinic"]} name="C3" onClick={handleChange(setFormC20)} byDefault={formC20.C3} />

          <Radio
            h3="If referred by a health facility, was a referral slip given?"
            CheckbobItems={["Yes", "No", "Don’t know"]}
            name="C4" onClick={handleChange(setFormC20)} byDefault={formC20.C4}
          />

          <Radio
            h3="What transport was used to reach the referral or other health care facility?"
            CheckbobItems={["Own vehicle", "Hired vehicle", "Government ambulance", "Private ambulance"]}
            name="C5" onClick={handleChange(setFormC20)} byDefault={formC20.C5}
          />

          <Radio
            h3="If Govt. Ambulance, which ambulance service?"
            CheckbobItems={["102", "108", "Don’t remember", "Others: (Specify)"]}
            name="C6" onClick={handleChange(setFormC20)} byDefault={formC20.C6}
          />

          <InputField h3="How much time the ambulance/ any transport took to reach the referral facility? (In Min/Hour)" placeholder="Type here" value={formC20.C7} name={"C7"} onChange={handleChange(setFormC20)} />

          <InputField h3="How much time the ambulance/ any transport took to reach the referral facility? (In Min/Hour)" placeholder="Type here" value={formC20.C8} name={"C8"} onChange={handleChange(setFormC20)} />

          <Radio
            h3="Did the patient go to the referred facility?"
            CheckbobItems={["Yes", "No"]}
            name="C9" onClick={handleChange(setFormC20)} byDefault={formC20.C9}
          />

          <Radio
            h3="Which type of facility did you or the patient shifted?"
            CheckbobItems={["SC/HWC", "PHC", "CHC", "District Headquarter Hospital", "Medical College", "Private hospital", "Private clinic", "ESI/railway/other Govt. Hospital", "Others(Specify)"]}
            name="C10" onClick={handleChange(setFormC20)} byDefault={formC20.C10}
          />

          <InputField h3="What was the name of the facility the patient shifted?" placeholder="Type here" value={formC20.C11} name={"C11"} onChange={handleChange(setFormC20)} />

          <Radio
            h3="Who suggested you visit the above mentioned facility for further emergency care?"
            CheckbobItems={["Self/ Family members", "Neighbour", "FLHW (ASHA/ AWW/ ANM/ CHO)", "Doctor", "Others"]}
            name="C12" onClick={handleChange(setFormC20)} byDefault={formC20.C12}
          />

          <Radio
            h3="How long after reaching the referral HCF (in emergency) was the patient attended?"
            CheckbobItems={["Immediately", "5-10 minutes", "10-30 minutes", ">30 minutes", "Do not know"]}
            name="C13" onClick={handleChange(setFormC20)} byDefault={formC20.C13}
          />

          <Radio
            h3="Who attended the patient at the referral HCF?"
            CheckbobItems={["Health worker", "Nurse", "Doctor", "Do not know"]}
            name="C14" onClick={handleChange(setFormC20)} byDefault={formC20.C14}
          />

          <Radio
            h3="Was any treatment started at the referral HCF?"
            CheckbobItems={["Yes", "No", "Do not know"]}
            name="C15" onClick={handleChange(setFormC20)} byDefault={formC20.C15}
          />

          <Radio
            h3="Were any laboratory &/or radiology investigations done at the HCF?"
            CheckbobItems={["Yes", "No", "Do not know"]}
            name="C16" onClick={handleChange(setFormC20)} byDefault={formC20.C16}
          />

          <Radio
            h3="How much time was spent in investigations at referral HCF?"
            CheckbobItems={["Less than 30 minutes", "30 minutes to 1 hour", "More than 1 hour", "Do not Know"]}
            name="C17" onClick={handleChange(setFormC20)} byDefault={formC20.C17}
          />

          <Radio
            h3="What was the final outcome of visiting the referral facility?"
            CheckbobItems={["Referred to higher facility", "Fully Recovered & Discharged", "Recovered with disability & Discharged", "Self-Discharged", "Death"]}
            name="C18" onClick={handleChange(setFormC20)} byDefault={formC20.C18}
          />

          <InputField h3="What emergency condition was found after consultation with the healthcare provider or mentioned in the discharge report?" placeholder="Type here" value={formC20.C19} name={"C19"} onChange={handleChange(setFormC20)} />
          
          <Buttons formName={"formc20"} formData={formC20} prev="/formsb-initialhealthcareseekingpathway2" next="//formsd-barriersandfacilitatorsinseekingcare" />
        </div>

      </div>
    </section>
  )
}

export default FormC20