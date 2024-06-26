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

function FormA3() {
  var forma3 = setLocalStorage("forma3", { AC1: ""})
  const [formA3, setFormA3] = useState(JSON.parse(forma3))
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
            <InputField name="AC1" h3="AC.1 How many members are currently residing in this household? :" placeholder="Type Number" onChange={handleChange(setFormA3)} value={formA3.AC1}  />

            <Table tableName={"forma3_table"} />

            <Buttons formName="forma3" formData={formA3} prevText="Previous" nextText="Save & Next" prev="/clusterinformation" next="/linelistingofhouseholdmembers-2" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA3