import React from 'react'
import { turnOffbutton } from './helpers'
import SidePanel from './child-comp/SidePanel';
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import { Link } from 'react-router-dom';
import "./Form.css"

function FormAB() {
  turnOffbutton();

  return (
    <section id='cluster-info'>
      <SidePanel />
      <div className='siteInfo'>
        <div>
          <h2>A Socio-demographic Characteristics</h2>
        </div>

        <div>
          <h3>
            Cluster Information
          </h3>
        </div>
        <div className='block'>
          <h3 className='h3block'>Block :</h3>
          <DropDown className='dropdown' dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"block_name"} />
        </div>

        <div className='block'>
          <h3 className='h3block'>Type of PSU :</h3>
          <Checkbox CheckbobItems={["Rural", "Urban"]} name={"type_of_psu"} />
        </div> 


        <div className='block'>
          <h3 className='h3block'>GPS Co-ordinates :</h3>
          <input className='blockinput'
            placeholder='Type here' />
        </div>

        <div className='block'>
          <h3 className='h3block'>Household ID Number :</h3>
          <input className='blockinput'
            placeholder='Number' />
        </div>
        <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac">Next</Link></button>
      </div>
    </section>
  )
}

export default FormAB