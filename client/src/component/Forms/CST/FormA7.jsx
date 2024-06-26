import SidePanel from './SidePanelCST.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import Radio from '../child-comp/Radio.jsx';
import { Link } from 'react-router-dom';
import "../Form.css"
import React, { useEffect, useState } from 'react'
import Buttons from '../child-comp/Buttons.jsx';
import InputField from '../child-comp/InputField.jsx';
import { turnOffbutton, handleChange } from '../helpers.js';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading';
import Table from '../child-comp/Table.jsx'
import DropDown from '../child-comp/DropDown.jsx';

function FormA7() {
  var forma7 = setLocalStorage("forma7", { AC7_1: "",AC7_1_if:"", AC7_2: "" })
  const [formA7, setFormA7] = useState(JSON.parse(forma7))
  turnOffbutton();
  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"4"} /> 
        <div className='siteInfo'>
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Burn
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">

            <Radio
              name="AC7_1"
              h3="AC.7.1 In the past one year, did you or any member of this household suffer from severe/minor burns etc. that required medical attention?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA7)}
            />
            <InputField h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC7_1_if" />
            <DropDown h3="AC.7.2  If yes, could you please tell who all from your Household suffered with this condition?" dropdownItems={["< 1 year", "> 1 year"]} name="AC7_2" onClick={handleChange(setFormA7)} />


            <Buttons prev="/trauma" next="/stemi" prevText="Previous" nextText="Save & Next" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA7