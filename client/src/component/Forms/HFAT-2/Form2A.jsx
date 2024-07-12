import React, { useState,useEffect, useMemo} from 'react'
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import LocationButton from '../child-comp/Location.jsx';
import DropDown from "../child-comp/DropDown.jsx"
import { GJBRC_DH, MPBHS_DH, ORPUR_DH, PBLDH_DH, PYPDY_DH } from '../BlockItem/blockList.js';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Form2A() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  turnOffbutton();
  var form2a = setLocalStorage("form2a", {
    H2A1: "",
    H2A2: "",
    H2A3: "",
    H2A4: "",
    H2A5: "",
    H2A6: "",
    H2A7: "",
    H2A8: "",
    H2A9: "",
    H2A10: "",
    H2A11: "",
  });

  const [form2A, setForm2A] = useState(JSON.parse(form2a));
  const date = new Date();

  const dropdownItems = useMemo(() => {
    switch (form2A.H2A2) {
      case "GJBRC_CHC_":
        return GJBRC_DH;
      case "ORPUR_CHC_":
        return ORPUR_DH;
      case "MPBHS_CHC_":
        return MPBHS_DH;
      case "PBLDH_CHC_":
        return PBLDH_DH;
      case "PYPDY_CHC_":
        return PYPDY_DH;
      default:
        return [];
    }
  }, [form2A.H2A2]);

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
      <section>
        <SidePanel id={"1"} />
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>2A. Facility Information</h3>
            </div>
          </div>

          <div className="formcontent">
            <InputField
              value={form2A.H2A1}
              onChange={handleChange(setForm2A)}
              h3="2A.1 : Assessor’s Name: "
              placeholder="Type here"
              name="H2A1"
            />

            <div>
              <p className="datetime">
                Date : {date.toDateString()} {date.getHours()}:
                {date.getMinutes()}
              </p>
            </div>

          <Radio h3="2A.2 : State :" CheckbobItems={[
            "GJBRC_CHC_",
            "ORPUR_CHC_",
            "MPBHS_CHC_",
            "PBLDH_CHC_",
            "PYPDY_CHC_"
          ]} byDefault={form2A.H2A2} onClick={handleChange(setForm2A)} name="H2A2" />

          <InputField name="H2A3" value={form2A.H2A3} onChange={handleChange(setForm2A)}  h3="2A.3 : Block Name :" placeholder="Type here"  />

            <InputField
              value={form2A.H2A4}
              onChange={handleChange(setForm2A)}
              h3="2A.4 : Healthcare Facility Name :"
              placeholder="Type here"
              name="H2A4"
            />

            <InputField
              value={form2A.H2A5}
              onChange={handleChange(setForm2A)}
              h3="2A.5 : Healthcare Facility Address :"
              placeholder="Type here"
              name="H2A5"
            />

            <InputField
              value={form2A.H2A6}
              onChange={handleChange(setForm2A)}
              h3="2A.6 : Name of the MOIC :"
              placeholder="Type here"
              name="H2A6"
            />

            <InputField
              value={form2A.H2A7}
              onChange={handleChange(setForm2A)}
              h3="2A.7 : Contact Number of MOIC :"
              placeholder="Type here"
              name="H2A7"
            />

            <InputField
              value={form2A.H2A8}
              onChange={handleChange(setForm2A)}
              h3="2A.8 : Email ID :"
              placeholder="Type here"
              name="H2A8"
            />

            {/* <InputField value={form2A.H2A9} onChange={handleChange(setForm2A)} h3="2A.9 : GPS Coordinates :" placeholder="Type here" name="H2A9" /> */}

            <LocationButton />

            <Radio
              byDefault={form2A.H2A10}
              onClick={handleChange(setForm2A)}
              h3="2A.10 : What type of CHC is this?"
              CheckbobItems={[
                "Non-FRU – CHC (30 beds)",
                "FRU – CHC (30 beds)",
                "FRU – CHC (50 beds)",
                "FRU – UCHC (50 beds)",
                "FRU – UCHC (100 beds)",
              ]}
              name="H2A10"
            />

            <Radio
              byDefault={form2A.H2A11}
              onClick={handleChange(setForm2A)}
              h3="2A.11 : Type of locality:"
              CheckbobItems={["Urban", "Rural"]}
              name="H2A11"
            />

            <Buttons
              formName="form2a"
              formData={form2A}
              prevText=""
              nextText="Save & Next"
              prev=""
              next="/infrastructure-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form2A;
