import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';


function Form2H() {
  return (
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

      <Buttons prev="/finance-2" next="/processpoliciessops-2" />
      </div>
    </div>
  </section>
  )
}

export default Form2H