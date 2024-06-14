import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';

function FormH() {

  turnOffbutton();
  var formh = setLocalStorage("formh",
   {H1H1:"",H1H2:"",H1H3:"",H1H4:"",H1H5:"",H1H6:"",H1H7:"",H1H8:[],H1H9:""})

  const [formH, setFormH] = useState(JSON.parse(formh));
  return (
    <div>
      <Heading h2="HFAT:  District Hospital/Tertiary Care (Public or Private)"></Heading>
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

        <h3 style={{color:"#3177FF"}}>Disaster management plan :</h3>

        <Radio byDefault={formH.H1H1} onClick={handleChange(setFormH)} name="H1H1" h3="Do you have any disaster management plan?" CheckbobItems={["Yes","No"]} />

        <Radio byDefault={formH.H1H2} onClick={handleChange(setFormH)} name="H1H2" h3="Do you have a redistribution plan?" CheckbobItems={["Yes","No"]} />

        <Radio byDefault={formH.H1H3} onClick={handleChange(setFormH)} name="H1H3" h3="Do you have any evacuation plan?" CheckbobItems={["Yes","No"]}/>

        <h3 style={{color:"#3177FF"}}>Quality Improvement Plan :</h3>


        <Radio byDefault={formH.H1H4} onClick={handleChange(setFormH)} name="H1H4" h3="Do you have a Quality Improvement Committee? (if yes, collect detail of Committee)" CheckbobItems={["Yes","No"]} other={true} />

        <InputField value={formH.H1H5} onChange={handleChange(setFormH)} name="H1H5" h3="How frequently does this committee meet in a year?" placeholder="Type here" />


        <Radio byDefault={formH.H1H6} onClick={handleChange(setFormH)} name="H1H6" h3="Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes","No"]} />

        <InputField value={formH.H1H7} onChange={handleChange(setFormH)} name="H1H7" h3="How frequently audits are conducted in a year?" placeholder="Type here" />


        <Checkbox setFunction={setFormH} array={formH.H1H8} StateValue={formH}  name="H1H8" h3="Types of audits conducted?" CheckbobItems={["Mortality audit","Morbidity Audit"]} other={true} />


        <InputField value={formH.H1H9} onChange={handleChange(setFormH)} name="H1H9" h3="Any action being taken on Audit report in the last one year?" placeholder="Type here" />

      <Buttons formName="formh" formData={formH} prev="/finance" next="/processpoliciessops" />
      </div>
    </div>
  </section>
  </div>
  )
}

export default FormH