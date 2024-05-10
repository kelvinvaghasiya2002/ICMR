import React from 'react'
import SidePanel from './child-comp/SidePanel'
import { turnOffbutton } from './helpers'
import Checkbox from './child-comp/Checkbox';
import DropDown from './child-comp/DropDown';

function FormAC() {
  turnOffbutton();
  return (
    <section id='household-schedule'>
      <SidePanel />

      <div>
        <h2>A Socio-demographic Characteristics</h2>
      </div>

      <div>
        <h3>
          Household Schedule
        </h3>
      </div>

      <div>
        <h3>Name of the Head of the Household : </h3>
        <input
          placeholder='Type here' />
      </div>

      <div>
        <h3>Age (in Years) :</h3>
        <input
          placeholder='Type here' />
      </div>

      <div>
        <h3>Sex :</h3>
        <Checkbox CheckbobItems={["Male", "Female", "Other"]} name={"sex"} />
      </div>

      <div>
        <h3>Religion :</h3>
        <Checkbox CheckbobItems={["Hindu", "Muslim", "Sikh", "Christian", "Buddhist/ Neo-Buddhist", "Jain", "Jewish", "Parsi/ Zoroastrian", "No Religion", "Other", "Prefer not to disclose/ Refuse"]} name={"religion"} />
      </div>

      <div>
        <h3>Caste :</h3>
        <Checkbox CheckbobItems={["General/ Unreserved (UR)", "Scheduled Caste (SC)", "Schedules Tribe (ST)", "Other Backward Class (OBC)", "None of the above", "Don’t Know", "Prefer not to disclose/ Refuse"]} name={"cast"} />
      </div>

      <div>
        <h3>Marital status: (Select the appropriate response):</h3>
        <Checkbox CheckbobItems={["Never married", "Currently Married", "Separated  ", "Divorced  ", "Widow", "Cohabitating", "Prefer not to disclose/ Refuse"]} name={"marital_status"} />
      </div>

      <div>
        <h3>Level of education (Select the appropriate response):</h3>
        <Checkbox CheckbobItems={["Illiterate", " Primary School Certificate", " Middle School Certificate", "High School Certificate  ", "Intermediate/ Diploma", "Graduate", "Professional or Honours", " Prefer not to disclose/ Refuse"]} name={"level_of_education"} />
      </div>

      <div>
        <h3>Occupation :</h3>
        <Checkbox CheckbobItems={["Unemployed", " Elementary Occupation", "  Plant & Machine Operators and Assemblers", "Craft & Related Trade Workers", " Skilled Agricultural  Fishery Workers", "Skilled Workers and Shop & Market Sales Workers", "Clerks", " Technicians & Associate Professionals", "Professionals", "Legislators, Senior Officers & Managers", "Prefer not to disclose/ Refuse"]} name={"ac-8"} />
      </div>

      <div>
        <h3>Total family Income per Month (in INR):</h3>
        <input
          placeholder='INR' />
        <Checkbox CheckbobItems={["Prefer not to disclose/ Refuse"]} name={"ac-9"} />
      </div>

      <div>
        <h3>What type of Transport facility available at home :</h3>
        <Checkbox CheckbobItems={["None", "Two-Wheeler (Bicycle)", "Two-Wheeler (Motorcycle)", " Three-Wheeler (Manual Rickshaw, etc.)", "Three-Wheeler (Auto Rickshaw/ E-rickshaw, etc.)", "Four-Wheeler (Car/Jeep/ etc.)", "Agricultural Vehicle (Tractor)", "Others (Specify)"]} name={"ac-10"} />
      </div>

      <div>
        <h3>Do you have any household medical insurance?</h3>
        <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-11"} />
      </div>

      <div>
        <h3>If Yes, which of the following Household Medical Insurance coverage do you
          have?</h3>
        <Checkbox CheckbobItems={["Private Insurance", "Central Health Insurance Scheme (Ayushmaan Bharat/CGHS / etc.)", "State Health Insurance Scheme", "Community Health Insurance Programme"]} name={"ac-12"} />
      </div>

      <div>
        <h3>Are all your family members enrolled with the same Insurance coverage?</h3>
        <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-13"} />
      </div>

      <div>
        <h3>How many of you or your family members have an individual medical/ health
          insurance scheme?</h3>
        <input
          placeholder='Type family number' />
      </div>

      <div>
        <h3>Do you have a BPL card?</h3>
        <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-15"} />
      </div>

      <div>
        <h3>Do you have an ABHA ID?</h3>
        <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-16"} />
      </div>

      <div>
        <h3>How many of your family members are enrolled with ABHA id?</h3>
        <input
          placeholder='Type family number' />
      </div>

      <div>
        <h3>Type of Family :</h3>
        <Checkbox CheckbobItems={["Nuclear", "Joint", "Living alone/Single"]} name={"ac-18"} />
      </div>

      <div>
        <h3>For how long have you been living in this city/ village with your family?</h3>
        <input
          placeholder='Type herer' />
      </div>

      <div>
        <h3>For how long have you been living in this city/ village with your family?</h3>
        <input
          placeholder='Type herer' />
      </div>
    </section>
  )
}

export default FormAC