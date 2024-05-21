import React from 'react'
import { turnOffbutton } from '../helpers'
import Checkbox from '../child-comp/Checkbox';
import Radio from '../child-comp/Radio';
import SidePanel from './SidePanel.jsx';
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField.jsx';

function FormC20() {
  turnOffbutton()
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

          <Checkbox h3="Who took the decision to refer/ shift the patient to another facility? " CheckbobItems={["Medical team", "Self/family", "Others(specify)"]} name="C-1" />

          <Checkbox h3="If referral was suggested by the medical team, what was the reason given for referral? (Select all that apply)" CheckbobItems={["Serious illness requiring higher centre", "Unavailability of doctor", "Unavailability of specialist", "Medicines unavailable", "Admission facility unavailable", "Unavailability of bed", "Inappropriate staff behaviour", "Others(specify)"]} name="C-2" />

          <Checkbox h3="Which facility were you referred?" CheckbobItems={["SC/HWC", "PHC", "CHC", "District Headquarter Hospital/ Equivalent Facility", "Medical College", "Private hospital", "Private clinic"]} name="C-3" />

          <Checkbox
            h3="If referred by a health facility, was a referral slip given?"
            CheckbobItems={["Yes", "No", "Don’t know"]}
            name="C-4"
          />

          <Checkbox
            h3="What transport was used to reach the referral or other health care facility?"
            CheckbobItems={["Own vehicle", "Hired vehicle", "Government ambulance", "Private ambulance"]}
            name="C-5"
          />

          <Checkbox
            h3="If Govt. Ambulance, which ambulance service?"
            CheckbobItems={["102", "108", "Don’t remember", "Others: (Specify)"]}
            name="C-6"
          />

          <InputField h3="How much time the ambulance/ any transport took to reach the referral facility? (In Min/Hour)" placeholder="Type here" />

          <InputField h3="How much time the ambulance/ any transport took to reach the referral facility? (In Min/Hour)" placeholder="Type here" />

          <Checkbox
            h3="Did the patient go to the referred facility?"
            CheckbobItems={["Yes", "No"]}
            name="C-9"
          />

          <Checkbox
            h3="Which type of facility did you or the patient shifted?"
            CheckbobItems={["SC/HWC", "PHC", "CHC", "District Headquarter Hospital", "Medical College", "Private hospital", "Private clinic", "ESI/railway/other Govt. Hospital", "Others(Specify)"]}
            name="C-10"
          />

          <InputField h3="What was the name of the facility the patient shifted?" placeholder="Type here" />

          <Checkbox
            h3="Who suggested you visit the above mentioned facility for further emergency care?"
            CheckbobItems={["Self/ Family members", "Neighbour", "FLHW (ASHA/ AWW/ ANM/ CHO)", "Doctor", "Others"]}
            name="C-12"
          />

          <Checkbox
            h3="How long after reaching the referral HCF (in emergency) was the patient attended?"
            CheckbobItems={["Immediately", "5-10 minutes", "10-30 minutes", ">30 minutes", "Do not know"]}
            name="C-13"
          />

          <Checkbox
            h3="Who attended the patient at the referral HCF?"
            CheckbobItems={["Health worker", "Nurse", "Doctor", "Do not know"]}
            name="C-14"
          />

          <Checkbox
            h3="Was any treatment started at the referral HCF?"
            CheckbobItems={["Yes", "No", "Do not know"]}
            name="C-15"
          />

          <Checkbox
            h3="Were any laboratory &/or radiology investigations done at the HCF?"
            CheckbobItems={["Yes", "No", "Do not know"]}
            name="C-16"
          />

          <Checkbox
            h3="How much time was spent in investigations at referral HCF?"
            CheckbobItems={["Less than 30 minutes", "30 minutes to 1 hour", "More than 1 hour", "Do not Know"]}
            name="C-17"
          />

          <Checkbox
            h3="What was the final outcome of visiting the referral facility?"
            CheckbobItems={["Referred to higher facility", "Fully Recovered & Discharged", "Recovered with disability & Discharged", "Self-Discharged", "Death"]}
            name="C-18"
          />

          <InputField h3="What emergency condition was found after consultation with the healthcare provider or mentioned in the discharge report?" placeholder="Type here" />
          
          <Buttons prev="/formsb-initialhealthcareseekingpathway2" next="//formsd-barriersandfacilitatorsinseekingcare" />
        </div>

      </div>
    </section>
  )
}

export default FormC20