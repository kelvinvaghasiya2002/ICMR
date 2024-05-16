import React, { useState } from 'react'
import { turnOffbutton } from '../helpers'
import SidePanel from '../child-comp/SidePanel';
import DropDown from '../child-comp/DropDown';
import Checkbox from '../child-comp/Checkbox';
import { Link } from 'react-router-dom';
import "./Form.css"
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';

function FormAB() {
  turnOffbutton();
  const [form , setForm] = useState({})

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

        <DropDown className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"block_name"} h3="Block :"/>

        <Checkbox h3="Type of PSU :" CheckbobItems={["Rural", "Urban"]} name="type_of_psu" />

        <InputField h3="Name of PSU (Town/Village) :" placeholder="Type here" />

        <InputField h3="GPS Co-ordinates :" placeholder="Type here" />

        <InputField h3="Household ID Number :" placeholder="Number" />

        
        <Buttons prev="/formsaa" next="/formsac-householdschedule" />
      </div>
    </section>
  )
}

export default FormAB