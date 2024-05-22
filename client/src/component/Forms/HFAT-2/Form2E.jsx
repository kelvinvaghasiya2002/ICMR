import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function Form2E() {
  return (
    <section>
    <SidePanel id={"5"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Emergency Care Services
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Buttons prev="/logistics-2" next="/informationsystem-2" />
      </div>
    </div>
  </section>
  )
}

export default Form2E