import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';


function Form2H() {
  var form2h = setLocalStorage("form2h" , {H2H1:"",H2H2:"",H2H3:"",H2H4:"",H2H5:"",H2H6:"",H2H7:"",H2H8:"",H2H9:""});

  const [form2H , setForm2H] = useState(JSON.parse(form2h));

  turnOffbutton();
  return (
    <div>
      <Heading h2="HFAT: CHC"></Heading>
    <section>
      <SidePanel id={"8"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Leadership and Governance
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <h3 style={{ color: "#3177FF" }}>Disaster management plan :</h3>

          <Radio h3="Do you have any disaster management plan?" CheckbobItems={["Yes", "No"]} name="H2H1" onClick={handleChange(setForm2H)} byDefault={form2H.H2H1} />

          <Radio h3="Do you have a redistribution plan?" CheckbobItems={["Yes", "No"]} name="H2H2" onClick={handleChange(setForm2H)} byDefault={form2H.H2H2} />

          <Radio h3="Do you have any evacuation plan?" CheckbobItems={["Yes", "No"]} name="H2H3" onClick={handleChange(setForm2H)} byDefault={form2H.H2H3} />

          <h3 style={{ color: "#3177FF" }}>Quality Improvement Plan :</h3>

          <Radio h3="Do you have a Quality Improvement Committee? (if yes, collect detail of Committee)" CheckbobItems={["Yes", "No"]} name="H2H4" onClick={handleChange(setForm2H)} byDefault={form2H.H2H4} />

          {/* if yes show textbox */}
          <InputField h3="How frequently does this committee meet in a year?" placeholder="Type here" name="H2H5" onChange={handleChange(setForm2H)} value={form2H.H2H5}  />

          <Radio h3="Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes", "No"]} name="H2H6" onClick={handleChange(setForm2H)} byDefault={form2H.H2H6} />

          <InputField h3="How frequently audits are conducted in a year?" placeholder="Type here" name="H2H7" onChange={handleChange(setForm2H)} value={form2H.H2H7} />

          <Checkbox h3="Types of audits conducted?" CheckbobItems={["Mortality audit", "Morbidity Audit"]} other={true} name="H2H8" setFunction={setForm2H} StateValue={form2H} array={form2H.H2H8}  />

          <InputField h3="Any action being taken on Audit report in the last one year?" placeholder="Type here" name="H2H9" onChange={handleChange(setForm2H)} value={form2H.H2H9} />

          <Buttons formName={"form2h"} formData={form2H} prev="/finance-2" next="/processpoliciessops-2" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Form2H