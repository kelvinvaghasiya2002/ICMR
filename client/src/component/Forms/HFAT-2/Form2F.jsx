import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function Form2F() {
  return (
    <section>
    <SidePanel id={"6"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Information System
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Buttons prev="/emergencycareservices-2" next="/finance-2" />
      </div>
    </div>
  </section>
  )
}

export default Form2F