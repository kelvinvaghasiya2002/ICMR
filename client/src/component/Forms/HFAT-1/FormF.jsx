import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';

function FormF() {

  turnOffbutton();
  var formf = setLocalStorage("formf",
   {H1F1:"",H1F2:"",H1F3:"",H1F4:"",H1F5:"",H1F6:[],H1F7:"",H1F8:"",H1F9:""})

  const [formF, setFormF] = useState(JSON.parse(formf));
  return (
    <div>
      <Heading h2="Health Facility Assessment Tool: District Hospital/Tertiary Care (Public or Private)"></Heading>
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

          <Radio byDefault={formF.H1F1} onClick={handleChange(setFormF)} name="H1F1" h3="1F.1 : Does the facility have a Hospital Management Information System (HMIS)" CheckbobItems={["Yes", "No"]}  />

          <Radio byDefault={formF.H1F2} onClick={handleChange(setFormF)}  name="H1F2" h3="1F.2 : Does this facility do complete reporting of indicators on emergency care in HMIS?" CheckbobItems={["Yes", "No"]}  />

          <InputField value={formF.H1F3} onChange={handleChange(setFormF)} name="H1F3" h3="1F.3 : How many personnel are available for managing information system?" placeholder="Type here" />

          <Radio byDefault={formF.H1F4} onClick={handleChange(setFormF)} name="H1F4" h3="1F.4 : What key indicators are generated from the emergency management information system?" CheckbobItems={["Numbers by type of emergencieses", "Length of hospital stay", "Turnaround time", "Disposal time", "Number of deaths", "Number of Referrals (in-house referrals and to other hospitals)"]}  />

          <Radio byDefault={formF.H1F5} onClick={handleChange(setFormF)} name="H1F5" h3="1F.5 : Whether time bound management of common emergencies is captured in MIS. For example,
Door to CT/ECG time, Door to needle time, Time to activate emergency alert team." CheckbobItems={["Yes", "No"]}  />

          <Checkbox setFunction={setFormF} StateValue={formF} array={formF.H1F6} name="H1F6" h3="1F.6 : If yes, select all that apply and provide their value" CheckbobItems={["Door to CT/ECG time:-  ", "Door to needle time:- ", "Time to activate emergency alert team:- "]}  time={true} />

          <Radio byDefault={formF.H1F7} onClick={handleChange(setFormF)} name="H1F7" h3="1F.7 : Whether hospital administrators/ Medical Superintendent uses or reviews the data for quality improvement" CheckbobItems={["Yes", "No"]}  />

          <Radio byDefault={formF.H1F8} onClick={handleChange(setFormF)} name="H1F8" h3="1F.8 : Do you get Pre-Hospital Notification during an emergency?" CheckbobItems={["Yes", "No"]}  />

          <Radio byDefault={formF.H1F9} onClick={handleChange(setFormF)} name="H1F9" h3="1F.9 : Infrastructure for receiving internal communication?" CheckbobItems={["Yes", "No"]}  />

          <Buttons formName="formf" formData={formF} prevText="Previous" nextText="Next" prev="/emergencycareservices" next="/finance" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default FormF