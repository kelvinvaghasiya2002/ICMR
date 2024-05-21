import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanel';
import Buttons from '../child-comp/Buttons';
import { handleChange } from '../helpers';
import setLocalStorage from '../setLocalStorage';

function FormD21() {
  var formd21 = setLocalStorage("formd21", {D1 : "" , D2:"" , D3:""})
  const [formD21, setFormD21] = useState(JSON.parse(formd21));

  return (
    <section>
      <SidePanel id={"21"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h2>
              Barriers and facilitators in seeking care
            </h2>
          </div>
        </div>

        <div className="formcontent">

          <Checkbox h3="Why did you NOT seek medical care at the facility during the emergency?  (Select all that apply) " CheckbobItems={["Lack of severity of symptoms", "Bad previous experience",
            "High cost of medical care", "Distant healthcare facilities", "Non-availability of transport", "Dissuaded by family/ friend/ neighbour", "Absence of accompanying member.", "Doctors not taking care or visiting the patient after admission", "Unavailability of OTC drugs", "Over prescription of medicines", "Unnecessary investigations", "Cultural barrier", "Linguistic barrier", "Lack of trust", "Others (Specify)"]} name={"D1"} onClick={handleChange(setFormD21)}  />


          <Checkbox h3="During the last medical emergency, when you went to seek medical care what were the challenges faced. (Select all that apply)" CheckbobItems={["Difficulty in getting the transport to healthcare facilities", "Reaching health facility not treating the condition", "Unavailability of same clinicians", "Long waiting period", "Communication barrier", "Out of pocket expenditure", "Unavailability of OTC drugs", "Over prescription of medicines", "Doctors not taking care or visiting the patient after admission", "Unnecessary investigations", "Other (please specify)"]} name={"D2"} onClick={handleChange(setFormD21)}  />


          <Checkbox h3="What motivated you for seeking care or taking the patient to the healthcare facility for emergency care?" CheckbobItems={["Easy accessibility", "Skilled Healthcare provider", "Good Professional behaviour", "Insurance facility", "Affordable services", "Insurance Empanelled Health care facility", "Good ambience of HCF", "Immediate care", "Others (Specify):"]} name={"D3"} onClick={handleChange(setFormD21)} />

          <Checkbox h3="While choosing a healthcare facility, what influence your decision to seek care during any health emergency conditions? 
" CheckbobItems={["Affordability", "Availability of Transport", "Availability of accompanying person", "Distance from facility", "Time delay", "Others (Specify):"]} name={"D4"} onClick={handleChange(setFormD21)} />


          <Buttons formName={"formd21"} formData={formD21} prev="/formsc-referralfacility" next="/formse-costing" />

        </div>

      </div>
    </section>
  )
}

export default FormD21