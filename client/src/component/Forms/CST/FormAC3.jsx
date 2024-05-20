import React, { useState } from 'react'
import SidePanel from '../child-comp/SidePanel'
import { handleChange, turnOffbutton } from '../helpers'
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage';


function FormAC() {
  var formac3 = setLocalStorage("formac3" , {
    AC1: "",
    AC2: "",
    AC3: "",
    AC4: "",
    AC5: "",
    AC6: "",
    AC7: "",
    AC8: "",
    AC9: "",
    AC10: "",
    AC11: "",
    AC12: "",
    AC13: "",
    AC14: "",
    AC15: "",
    AC16: "",
    AC17: "",
    AC18: "",
    AC19: "",
    AC20:""
  }) 

  const [formAC3 , setFormAC3] = useState(JSON.parse(formac3))

  turnOffbutton();
  return (
    <section id='household-schedule'>
      <SidePanel id={"3"} />
      <div className='siteInfo'>
        <div className='formhdr'>
          <div>
            <h2>A Socio-demographic Characteristics</h2>
          </div>

          <div>
            <h3>
              Household Schedule
            </h3>
          </div>
        </div>
        <div className='formcontent'>

          <InputField name="AC1" h3="Name of the Head of the Household : " value={formAC3.AC1} onChange={handleChange(setFormAC3)} placeholder="Type here" />

          <InputField name="AC2" h3="Age (in Years) :" value={formAC3.AC2} onChange={handleChange(setFormAC3)} placeholder="Type here" />

          <Radio name="AC3" h3="Sex :" onClick={handleChange(setFormAC3)} CheckbobItems={["Male", "Female", "Other"]} byDefault={formAC3.AC3}/>

          <Radio name="AC4" h3="Religion :" onClick={handleChange(setFormAC3)} CheckbobItems={["Hindu", "Muslim", "Sikh", "Christian", "Buddhist/ Neo-Buddhist", "Jain", "Jewish", "Parsi/ Zoroastrian", "No Religion", "Other", "Prefer not to disclose/ Refuse"]} byDefault={formAC3.AC4}/>

          <Radio name="AC5" h3="Caste :" onClick={handleChange(setFormAC3)} CheckbobItems={["General/ Unreserved (UR)", "Scheduled Caste (SC)", "Schedules Tribe (ST)", "Other Backward Class (OBC)", "None of the above", "Don’t Know", "Prefer not to disclose/ Refuse"]} byDefault={formAC3.AC5}/>

          <Radio name="AC6" h3="Marital status: (Select the appropriate response):" onClick={handleChange(setFormAC3)} CheckbobItems={["Never married", "Currently Married", "Separated  ", "Divorced  ", "Widow", "Cohabitating", "Prefer not to disclose/ Refuse"]} byDefault={formAC3.AC6}/>


          <Radio name="AC7" h3="Level of education (Select the appropriate response):" onClick={handleChange(setFormAC3)} CheckbobItems={["Illiterate", " Primary School Certificate", " Middle School Certificate", "High School Certificate  ", "Intermediate/ Diploma", "Graduate", "Professional or Honours", " Prefer not to disclose/ Refuse"]} byDefault={formAC3.AC7}/>


          <Radio name="AC8" h3="Occupation :" onClick={handleChange(setFormAC3)} CheckbobItems={["Unemployed", " Elementary Occupation", "  Plant & Machine Operators and Assemblers", "Craft & Related Trade Workers", " Skilled Agricultural  Fishery Workers", "Skilled Workers and Shop & Market Sales Workers", "Clerks", " Technicians & Associate Professionals", "Professionals", "Legislators, Senior Officers & Managers", "Prefer not to disclose/ Refuse"]} byDefault={formAC3.AC8}/>

          <InputField name="AC9" h3="Total family Income per Month (in INR) (Optional):" value={formAC3.AC9} onChange={handleChange(setFormAC3)} placeholder="INR" />


          <Radio name="AC10" h3="What type of Transport facility available at home :" onClick={handleChange(setFormAC3)} CheckbobItems={["None", "Two-Wheeler (Bicycle)", "Two-Wheeler (Motorcycle)", " Three-Wheeler (Manual Rickshaw, etc.)", "Three-Wheeler (Auto Rickshaw/ E-rickshaw, etc.)", "Four-Wheeler (Car/Jeep/ etc.)", "Agricultural Vehicle (Tractor)", "Others (Specify)"]} byDefault={formAC3.AC10}/>

          <Radio name="AC11" h3="Do you have any household medical insurance?" onClick={handleChange(setFormAC3)} CheckbobItems={["Yes", "No"]} byDefault={formAC3.AC11}/>

          <Radio name="AC12" h3="If Yes, which of the following Household Medical Insurance coverage do you
              have?" onClick={handleChange(setFormAC3)} CheckbobItems={["Private Insurance", "Central Health Insurance Scheme (Ayushmaan Bharat/CGHS / etc.)", "State Health Insurance Scheme", "Community Health Insurance Programme"]}byDefault={formAC3.AC12} />


          <Radio name="AC13" h3="Are all your family members enrolled with the same Insurance coverage?" onClick={handleChange(setFormAC3)} CheckbobItems={["Yes", "No"]} byDefault={formAC3.AC13}/>

          <InputField name="AC14" h3="How many of you or your family members have an individual medical/ health
              insurance scheme?" value={formAC3.AC14} onChange={handleChange(setFormAC3)} placeholder="Type family number" />


          <Radio name="AC15" h3="Do you have a BPL card?" onClick={handleChange(setFormAC3)} CheckbobItems={["Yes", "No"]} byDefault={formAC3.AC15}/>


          <Radio name="AC16" h3="Do you have an ABHA ID?" onClick={handleChange(setFormAC3)} CheckbobItems={["Yes", "No"]} byDefault={formAC3.AC16}/>



          <InputField name="AC17" h3="How many of your family members are enrolled with ABHA id?" value={formAC3.AC17} onChange={handleChange(setFormAC3)} placeholder="Type family number" />


          <Radio name="AC18" h3="Type of Family :" onClick={handleChange(setFormAC3)} CheckbobItems={["Nuclear", "Joint", "Living alone/Single"]} byDefault={formAC3.AC18}/>



          <InputField name="AC19" h3="For how long have you been living in this city/ village with your family?" value={formAC3.AC19} onChange={handleChange(setFormAC3)} placeholder="Type here" />

          <InputField name="AC20" h3="How many members are currently residing in this household?" value={formAC3.AC20} onChange={handleChange(setFormAC3)} placeholder="Type Number" />


          <Buttons formName="formac3"  formData={formAC3} prev="/formsab" next="/formsac-relationshipwithheadofhousehold" />

        </div>
      </div>
    </section>
  )
}

export default FormAC