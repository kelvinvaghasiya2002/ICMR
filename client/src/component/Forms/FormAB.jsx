import React from 'react'
import { turnOffbutton } from './helpers'
import SidePanel from './child-comp/SidePanel';
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import { Link } from 'react-router-dom';

function FormAB() {
  turnOffbutton();

  return (
    <section id='cluster-info'>
      <SidePanel />
      <div>
        <h2>A Socio-demographic Characteristics</h2>
      </div>

      <div>
        <h3>
          Cluster Information
        </h3>
      </div>

      <div>
        <h3>Block :</h3>
        <DropDown dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"block_name"} />
      </div>

      <div>
        <h3>Block :</h3>
        <DropDown dropdownItems={["Bhagat Singh Bhavan", "C V Raman"]} name={"block_name"} />
      </div>

      <div>
        <h3>Type of PSU :</h3>
        <Checkbox CheckbobItems={["Rural", "Urban"]} name={"type_of_psu"} />
      </div>

      <div>
        <h3>GPS Co-ordinates :</h3>
        <input
          placeholder='Type here' />
      </div>

      <div>
        <h3>Household ID Number :</h3>
        <input
          placeholder='Number' />
      </div>
      <button><Link to="/formsac">Next</Link></button>
    </section>
  )
}

export default FormAB