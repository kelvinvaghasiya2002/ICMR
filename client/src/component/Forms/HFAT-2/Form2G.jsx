import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function Form2G() {
  return (
    <section>
    <SidePanel id={"7"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Finance
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Buttons prev="/informationsystem-2" next="/leadershipandgovernance-2" />
      </div>
    </div>
  </section>
  )
}

export default Form2G