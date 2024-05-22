import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function Form2C() {
  return (
    <section>
    <SidePanel id={"3"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Human Resources
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Buttons prev="/infrastructure-2" next="/logistics-2" />
      </div>
    </div>
  </section>
  )
}

export default Form2C