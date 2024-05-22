import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function Form2I() {
  return (
    <section>
    <SidePanel id={"9"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Process/ Policies/SOPs
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Buttons prev="/leadershipandgovernance-2" next="/referrallinkages-2" />
      </div>
    </div>
  </section>
  )
}

export default Form2I