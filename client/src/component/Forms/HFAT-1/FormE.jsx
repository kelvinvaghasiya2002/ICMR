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
import OverlayCard from '../OverlayCard.jsx';
import { validateCheckBox } from '../fv.js';

function FormE() {
  
  // --toggle--
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth > 1024);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleResize = () => {
    if (window.innerWidth >= 1025) {
      setSidebarVisible(true);
    }
  };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // --toggle end--

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    AOS.init({ duration: 2000 })
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var forme = setLocalStorage("forme", { E3: [""], E4: [""] });
  const [formE, setFormE] = useState(JSON.parse(forme));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

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

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        console.log(field + "field");
        if(Array.isArray(formE[field])){
          console.log(formE[field]);
          newErrors[field] = validateCheckBox(formE[field]);
        }else{
          newErrors[field] = validateRequired(formE[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formE]);

  const isFormValid = () => {
    const requiredFields = ['E3', 'E4'];
    const missingFields = requiredFields.filter(field => {
      if (Array.isArray(formE[field])) {
      return formE[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
      } else {
      return !formE[field] || (typeof formE[field] === 'string' && formE[field].trim() === '');
      }
    });
    return { isValid: missingFields.length === 0, missingFields };
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        newErrors[field] = 'This field is required';
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formE]);


  return (
    <div>
      <div className="header">
          <div className="burger-menu" onClick={toggleSidebar}>
          &#9776;
          </div>
          <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      </div>
      <section className="form-main">
          {isSidebarVisible && (
          <>
              <SidePanel id={"5"} />
              <div className="grayedover" onClick={toggleSidebar}></div>
          </>
          )}
          {/* <SidePanel id={"5"} /> */}
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



            <div className="button-container">
            <Buttons formName={'forme'} formData={formE} prevText="Previous" nextText="Save & Next" prev="/logisticsdrugsconsumablesequipment-2" next="/informationsystem"
            formType="hfat1"  />

              <OverlayCard
                isVisible={showOverlay}
                message="(Please fill all required fields to proceed)"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default FormE