import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

import { turnOffbutton } from '../helpers';
import RadioButtonOtherSpecify from '../child-comp/RadioButtonOtherSpecify';


import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';

function Form3F() {
    turnOffbutton();

    var form3f = setLocalStorage("form3f",
   {H3F1:"",H3F2:"",H3F3:"",H3F4:"",H3F5:"",H3F6:"",H3F7:"",H3F8:"",H3F9:""})

  const [form3F, setForm3F] = useState(JSON.parse(form3f));

  return (
    <section>
    <SidePanel id={"6"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Information System
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio byDefault={form3F.H3F1} onClick={handleChange(setForm3F)} name="H3F1" h3="Does the facility have a Hospital   Management Information System (HMIS)" CheckbobItems={["Yes", "No"]}  />

      <Radio byDefault={form3F.H3F2} onClick={handleChange(setForm3F)} name="H3F2" h3="Does this facility do complete   reporting of indicators on emergency care in HMIS?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3F.H3F3} onChange={handleChange(setForm3F)} name="H3F3" h3="How many personnel are available for managing information system?" placeholder="Type here"/>

      <Radio byDefault={form3F.H3F4} onClick={handleChange(setForm3F)} name="H3F4" h3="What key indicators are generated from the emergency management information system?" CheckbobItems={["Numbers by type of emergencies", "Length of hospital stay","Turnaround time","Disposal time","Number of deaths","Number of Referrals"]}  />

      <Radio byDefault={form3F.H3F5} onClick={handleChange(setForm3F)} name="H3F5" h3="Whether time bound management of common emergencies is captured in MIS." CheckbobItems={["Yes", "No"]}  />

      <Radio byDefault={form3F.H3F6} onClick={handleChange(setForm3F)} name="H3F6" h3="Which of the following alert systems does your facility have?" CheckbobItems={["Code blue alert system.", "NSTEMI alert systemo","Stroke alert system.","Trauma alert system"]}  />

      <Radio byDefault={form3F.H3F7} onClick={handleChange(setForm3F)} name="H3F7" h3="Whether Medical Officer In charge (MO/IC) uses or reviews the data for quality improvement" CheckbobItems={["Yes", "No"]}  />

      <RadioButtonOtherSpecify h3="Do you get Pre-Hospital Notification during an emergency?" CheckbobItems={["No","Yes(How often per week)"]}  />


      <Radio byDefault={form3F.H3F9} onClick={handleChange(setForm3F)} name="H3F9" h3="Infrastructure for receiving internal communication?" CheckbobItems={["Yes", "No"]}  />

      <Buttons formName="form3f" formData={form3F} prev="/emergencycareservices-3" next="/finance-3" />
      </div>
    </div>
  </section>
  )
}

export default Form3F