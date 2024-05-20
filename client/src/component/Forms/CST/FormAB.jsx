import React, { useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import SidePanel from '../child-comp/SidePanel';
import DropDown from '../child-comp/DropDown';
import Radio from "../child-comp/Radio.jsx"
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';
import setLocalStorage from '../setLocalStorage.js';

function FormAB() {
  var formab = setLocalStorage("formab" , {AB1: "" , AB2: "" , AB3:"" , AB4:"" , AB5:""})
  turnOffbutton();
  const [formAB, setFormAB] = useState(JSON.parse(formab))

  return (
    <section id='cluster-info'>
      <SidePanel id={"2"} />
      <div className='siteInfo'>
        <div>
          <h2>A Socio-demographic Characteristics</h2>
        </div>

        <div>
          <h3>
            Cluster Information
          </h3>
        </div>

        <DropDown className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"AB1"} h3="Block :" onClick={handleChange(setFormAB)} byDefault={formAB.AB1}/>

        <Radio h3="Type of PSU :" CheckbobItems={["Rural", "Urban"]} name="AB2" byDefault={formAB.AB2} onClick={handleChange(setFormAB)}/>

        <InputField h3="Name of PSU (Town/Village) :" placeholder="Type here" name={"AB3"} value={formAB.AB3} onChange={handleChange(setFormAB)}/>

        <InputField h3="GPS Co-ordinates :" placeholder="Type here" name={"AB4"} value={formAB.AB4} onChange={handleChange(setFormAB)}/>

        <InputField h3="Household ID Number :" placeholder="Number" name={"AB5"} value={formAB.AB5} onChange={handleChange(setFormAB)}/>


        <Buttons formName="formab" formData={formAB} prev="/formsaa" next="/formsac-householdschedule" />
      </div>
    </section>
  )
}

export default FormAB