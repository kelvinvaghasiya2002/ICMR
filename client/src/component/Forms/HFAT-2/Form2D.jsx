import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function Form2D() {
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

      <InputField h3="Which of the following emergency drugs are available at the CHC? 
(Multiple answers possible)?" placeholder="Type family member"/>

      <InputField h3="Which of the following emergency equipment is available at the CHC? 
(Multiple answers possible)" placeholder="Type family member"/>

      <Buttons prev="/humanresources-2" next="/emergencycareservices-2" />
      </div>
    </div>
  </section>
  )
}

export default Form2D