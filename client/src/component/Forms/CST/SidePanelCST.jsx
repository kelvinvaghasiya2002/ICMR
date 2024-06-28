import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

function SidePanelCST({ id }) {
  useEffect(()=> {
    AOS.init({duration:2000})
}, []);
  // console.log(id);
  useEffect(() => {
    const link = document.getElementById(id);
    if (link) {
      const pElement = link.querySelector('p'); // Select the <p> inside the Link
      pElement.style.backgroundColor = "#152266";
      link.style.color = "white";
      // link.style.backgroundColor="#152266" ;
    }
  })
  return (
    <div className='sidePanel'data-aos="fade-right" >
      <p>A Socio-demographic Characteristics</p>
      <div className='innerdiv'>
        <Link id='1' to=''><p>Site Information</p></Link>
        <Link id='2' to=''><p>Cluster Information</p></Link>
        <Link id='3' to=''><p>Line listing of Household members</p></Link>
        <Link id='4' to=''><p>Trauma</p></Link>
        <Link id='5' to=''><p >Burn</p></Link>
        <Link id='6' to=''><p >STEMI</p></Link>
        <Link id='7' to=''><p >Stroke</p></Link>
        <Link id='8' to=''><p >Acute Respiratory Illness</p></Link>
        <Link id='9' to=''><p >Maternal & Neonatal Emergency</p></Link>
        <Link id='10' to=''><p >Snakebite</p></Link>
        <Link id='11' to=''><p >Poisoning</p></Link>
        <Link id='12' to=''><p >Others</p></Link>
        <Link id='13' to=''><p >Death</p></Link>
        {/* <Link id='14' to=''><p>Verbal & Social Autopsy Questionnaire</p></Link>
        <Link id='15' to=''><p>Verbal & Social Autopsy Questionnaire 2</p></Link> */}
        {/* <Link id='16' to='/formsac-verbal&socialautopsyquestionnaire-3'><p>Verbal & Social Autopsy Questionnaire 3</p></Link>
        <Link id='17' to='/formsb-sociodemographicprofile'><p>Socio-demographic profile of the patient in the HH with Emergency Condition</p></Link>
        <Link id='18' to='/formsb-initialhealthcareseekingpathway1'><p >Initial Healthcare Seeking Pathway - 1</p></Link>
        <Link id='19' to='/formsb-initialhealthcareseekingpathway2'><p >Initial Healthcare Seeking Pathway - 2</p></Link>
        <Link id='20' to='/formsc-referralfacility'><p>Referral Facility</p></Link>
        <Link id='21' to='/formsd-barriersandfacilitatorsinseekingcare'><p>Barriers and facilitators in seeking care</p></Link>
        <Link id='22' to='/formse-costing'><p>Costing (Complete event of seeking care)</p></Link> */}
      </div>
    </div>
  )
}

export default SidePanelCST