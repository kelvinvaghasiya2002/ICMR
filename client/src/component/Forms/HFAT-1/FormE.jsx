import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import E1 from '../Tables/E1';
import E2 from '../Tables/E2';
import { turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';

function FormE() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);
  var forme = setLocalStorage("forme", { E3: [""], E4: [""] });
  const [formE, setFormE] = useState(JSON.parse(forme));
  const [formError, setFormError] = useState("");

  turnOffbutton();

  const columns2 = [
    { key: 'Type', label: 'Type', type: 'text' },
    { key: 'Attended', label: 'Attended (NA: data unavailable)', type: 'input' },
    { key: 'Death', label: 'Death (NA: data unavailable)', type: 'input' },
  ];

  // Define the initial rows
  const initialRows2 = [
    { Type: 'MI', Attended: '', Death: '' },
    { Type: 'Stroke', Attended: '', Death: '' },
    { Type: 'Trauma & Burns', Attended: '', Death: '' },
    { Type: 'Poisoning', Attended: '', Death: '' },
    { Type: 'Snake Bite', Attended: '', Death: '' },
    { Type: 'Maternal Emergencies-PPH', Attended: '', Death: '' },
    { Type: 'Maternal Emergencies- Eclampsia', Attended: '', Death: '' },
    { Type: 'Neonatal Emergencies', Attended: '', Death: '' },
    { Type: 'Acute Respiratory Illness', Attended: '', Death: '' },
  ];

  const validateForm = () => {
    if (formE.E3.filter(item => item !== "").length === 0) {
      setFormError("Select at least one emergency care service option in section 1E.3");
      return false;
    }
    if (formE.E4.filter(item => item !== "").length === 0) {
      setFormError("Select at least one emergency diagnostic facility option in section 1E.4");
      return false;
    }
    setFormError("");
    return true;
  };

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      <section>
        <SidePanel id={"5"} />
        <div className="siteInfo" data-aos="fade-left">

          <div className="formhdr">
            <div>
              <h3>
                1E. Emergency Care Services
              </h3>
            </div>
          </div>

          <div className="formcontent">

            <h3>1E.1 : Numbers of Patients who Visited ED in Last One Month</h3>
            <E1 tableName={"E1"} />

            <h3>1E.2 : Numbers of Patients Attended in ED and Deaths in Last One Year (Jan - Dec 2023)</h3>

            <E2 columns={columns2} initialRows={initialRows2} tableName={"E2"} />

            <Checkbox
              h3="1E.3 : Which of these emergency care services does your facility provide? (Select all that apply)"
              CheckbobItems={[
                "Emergency operative services for trauma patients",
                "Emergency operative services for non-trauma (surgical, orthopedics etc.) patients",
                "Emergency operative services for obstetrics patients",
                "Elective operative services for orthopedic patients",
                "Elective operative services for neurosurgical patients",
                "Common intensive care services (ICU)",
                "Common high dependency Unit (HDU)",
                "Pediatrics ICU",
                "Neonatal ICU",
                "Neurosurgery ICU",
                "Cardiac ICU",
                "Cardiac Cath Lab",
                "Intervention Radiology",
                "Intervention neuroradiology service with DSA",
                "Stroke unit",
                "Tele-Medicine facility",

              ]}
              other={true}
              name="E3"
              setFunction={setFormE} StateValue={formE} array={formE.E3}
            />

            <Checkbox
              h3="1E.4 : Which of these emergency diagnostic facilities are provided at DH/ Tertiary Care Hospital?"
              CheckbobItems={[
                "Radiology-CT",
                "Radiology-ultrasound",
                "Radiology-MRI",
                "Radiology Services are functional 24X7",
                "Point of care lab -ABG, Troponin",
                "Availability of Functional ECG Services",

              ]}
              other={true}
              name="E4"
              setFunction={setFormE} StateValue={formE} array={formE.E4}
            />


            {formError && <p className="error-msg">{formError}</p>}

            <Buttons formName={'forme'} formData={formE} prevText="Previous" nextText="Save & Next" prev="/logisticsdrugsconsumablesequipment-2" next="/informationsystem" validateForm={validateForm} />

          </div>
        </div>
      </section>
    </div>
  )
}

export default FormE