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
  var forma3 = setLocalStorage("forma3", { AC1: "", AC2_1: "", AC3: "", AC4: "", AC5: "", AC6_1: "", AC6_1_if: "", AC6_2: "", AC7_1: "", AC7_1_if: "", AC7_2: "", AC8_1: "", AC8_1_if: "", AC8_2: "", AC9_1: "", AC9_1_if: "", AC9_2: "", AC10_1: "", AC10_1_if: "", AC10_2: "", AC11_1: "", AC11_1_if: "", AC11_2: "", AC11_2_if: "", AC11_3: "", AC11_4: "", AC11_4_if: "", AC11_5: "", AC12_1: "", AC12_1_if: "", AC12_2: "", AC13_1: "", AC13_1_if: "", AC13_2: "", AC14_1: "", AC14_1_if: "", AC14_2: "", AC15_1: "", AC15_2: "", AC15_4: "" })

  const [formA3, setFormA3] = useState(JSON.parse(forma3))

  
  turnOffbutton();
  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"3"} />
        <div className='siteInfo'>
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Line listing of Household members
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <Radio
              name="AC3"
              h3="AC.3 I am reading out all the names of individuals residing in this house. Just to make sure that I have a complete household listing: Are there any other persons such as small children or infants that we have not listed?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA3)}
              byDefault={formA3.AC3}
            />
            <Radio
              name="AC4"
              h3="AC.4 Are there any other people who may not be members of your family such as domestic servants who usually live here?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA3)}
              byDefault={formA3.AC4}
            />

            <h4><i>Now, I would like to get some information related to the medical emergency conditions your household had been through in the past one year.</i></h4>

            <Radio
              name="AC5"
              h3="AC.5 In the past one year, did any member of this household have any health emergency that could have required any sort of medical attention or treatment?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA3)}
              byDefault={formA3.AC5}
            />

            <Buttons formName="forma3" formData={formA3} prevText="Previous" nextText="Save & Next" prev="/linelistingofhouseholdmembers-2" next="/trauma" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA5