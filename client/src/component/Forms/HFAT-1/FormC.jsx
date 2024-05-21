import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from '../child-comp/SidePanel';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormC() {
  return (
    <section>
      <SidePanel id={"20"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Human Resources
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <h1>Table Remaining</h1>
          <h3>Please indicate which of the following specialist/super specialist services are available in your hospital</h3>
          <Checkbox
            h3="District Hospital + Medical College"
            CheckbobItems={[
              "Medicine",
              "Gynecology and obstetrics",
              "Orthopedics",
              "General surgery",
              "Radiology",
              "Anesthesia",
              "Critical care",
              "Ophthalmology",
              "ENT",
              "Psychiatry",
              "Dermatology",
              "Forensic medicine"
            ]}
            name="C2a"
          />

          <Checkbox
            h3="Medical College"
            CheckbobItems={[
              "Transfusion medicine",
              "Cardiology",
              "CTVS",
              "Neurology",
              "Neurosurgery",
              "Plastic surgery",
              "Maxillofacial surgery",
              "Gastroenterology",
              "Nephrology",
              "Urology",
              "Pediatric surgery",
              "Emergency medicine"
            ]}
            name="C2b"
          />

          <Radio
            h3="Whether training for emergency care management is being conducted for the staff in the institution?"
            CheckbobItems={["Yes", "No"]}
            name="C3"
          />

          <InputField name="C4" h3="When was the last training conducted ? " placeholder="Type here" />





          <Buttons prev="/infrastructure" next="/logisticsdrugsconsumablesequipment" />
        </div>
      </div>
    </section>
  )
}

export default FormC