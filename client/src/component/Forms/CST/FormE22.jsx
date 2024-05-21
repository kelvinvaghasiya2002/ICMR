import { handleChange, turnOffbutton } from '../helpers'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanel.jsx';
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField.jsx';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Radio from '../child-comp/Radio.jsx';
import setLocalStorage from '../setLocalStorage.js';


function FormE22() {
  var forme22 = setLocalStorage("forme22", {E1 : "" , E2:"" , E3:"" , E4 : ""})
  const [formE22, setFormE22] = useState(JSON.parse(forme22));
  turnOffbutton()
  const [popup , setPopup] = useState(false)
  function handleClick() {
      setPopup(true)
  }
  function handleCancel() {
      setPopup(false)
  }
  return (
    <section>
      <SidePanel id={"22"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Costing (Complete event of seeking care)
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <Radio
            h3="Was the patient covered by any insurance?"
            CheckbobItems={["Yes", "No"]}
            name="E1" onClick={handleChange(setFormE22)} byDefault={formE22.E1}
          />

          <Radio
            h3="If yes, which of the following Insurance coverage patient had? (optional)"
            CheckbobItems={["Private cashless", "Private reimbursement", "Central Health Insurance Scheme (Ayushmaan Bharat/ CGHS / etc.)", "State Health Insurance Scheme", "Community Health Insurance Programme", "None"]}
            name="E2" onClick={handleChange(setFormE22)} byDefault={formE22.E2}
          />

          <Radio
            h3="How much amount was spent on the following while availing the emergency care facility? (compulsory)"
            CheckbobItems={["Transport: __________ INR", "Drugs: ____________ INR", "Consultation: _________INR", "Diagnostics: _________ INR", "Implants and devices etc.: _________ INR", "Hospital stay: ________ INR", "Other (Specify): ______ INR"]}
            name="E3"
            onClick={handleChange(setFormE22)} byDefault={formE22.E3}
          />

          <InputField name="E4" h3="What is the approximate amount spent on the following while availing the emergency care facility." placeholder="Type here" value={formE22.E4} onChange={handleChange(setFormE22)} />

          {popup && <div className='popup'>
            <h3 className='popuph3'>Form</h3>
            <h3>Confirmation Message</h3>
            <p>Your response have been received. </p>
            <div className='popupbtn'>
              <button className='cancelbtn' onClick={handleCancel}>Cancel</button>
              <button className='nextbtn'><Link
                style={{ color: "white", textDecoration: "none" }}
                to="/">Submit</Link></button>
            </div>
          </div>}
          <Buttons formName={"forme22"} formData={formE22} prev="/formsb-sociodemographicprofile" next="/" />
        </div>
      </div>
    </section>
  )
}

export default FormE22