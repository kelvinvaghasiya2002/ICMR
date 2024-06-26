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

function FormA5() {
  turnOffbutton();
  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"1"} />
        <div className='siteInfo'>
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Line listing of Household members.
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <Radio
              name="AC3"
              h3="In the past 1 year, did you or any member of this household suffer from sudden injury in Road Traffic Accident/severe fall/drowning/stabbing/gunshot/any other assault/suicidal attempt/burns/domestic violence/homicidal etc. that required immediate medical service?"
              CheckbobItems={["Yes", "No"]}
            />
            <Radio
              name="AC4"
              h3="Are there any other people who may not be members of your family such as domestic servants who usually live here?"
              CheckbobItems={["Yes", "No"]}
            />
            
            <h4><i>Now, I would like to get some information related to the medical emergency conditions your household had been through in the past one year.</i></h4>

            <Radio
              name="AC5"
              h3="In the past one year, did any member of this household have any health emergency that could have required any sort of medical attention or treatment?"
              CheckbobItems={["Yes", "No"]}
            />




            <Buttons formName="formaa" prevText="Previous" nextText="Save & Next" prev="/linelistingofhouseholdmembers-2" next="/trauma" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA5