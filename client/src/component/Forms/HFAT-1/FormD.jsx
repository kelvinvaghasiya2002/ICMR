import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormD() {
  return (
    <section>
      <SidePanel id={"4"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Logistics (Drugs/ Consumables/ Equipment)
            </h3>
          </div>
        </div>

        <div className="formcontent">
          <InputField name="D1" h3="Which of the following essential emergency drugs are available at the DH/ Tertiary Care Hospital? (Multiple answers possible)?" placeholder="Type here" />
          <InputField name="D1" h3="Which of the following essential emergency equipment is available at the DH/ Tertiary Care Hospital? (Multiple answers possible)?" placeholder="Type here" />
          <Buttons prev="/humanresources" next="/emergencycareservices" />
        </div>
      </div>
    </section>
  )
}

export default FormD