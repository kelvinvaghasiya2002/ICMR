import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelAmbulance';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';

function Facility() {

    turnOffbutton();

  const date = new Date();
  return (
    <section>
    <SidePanel id={"1"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Facility Information
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio h3="State :" CheckbobItems={["GJBRC_AST_00000", "ORPUR_AST_11111", "MPBHS_AST_22222", "PBLDH_AST_33333", "PYPDY_AST_44444"]}  />

      <InputField h3="Name of the data collector:" placeholder="Type here"/>

      <div>
          <p className='datetime'>Date : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
      </div>

      <Radio h3="Name of the Ambulance Service?" CheckbobItems={["Public", "108", "104", "112", "102","Private","Institutional Ambulance"]}  />

      <InputField h3="Which Location/Area does your ambulance operate in?" placeholder="Type here"/>

      <Radio h3="Type of Ambulance Service?" CheckbobItems={["Type A", "Type B","Type C","Type D"]}  />

      <Radio h3="Is the ambulance service available 24/7?" CheckbobItems={["Yes","No"]}  />

      <InputField h3="How many cases do you transport per day on an a average" placeholder="Type here"/>

      <InputField h3="How many emergency cases do you transport per day on an a average" placeholder="Type here"/>
 

      <Buttons prev="" next="" />
      </div>
    </div>
  </section>
  )
}

export default Facility