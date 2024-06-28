import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

function SidePanelHFAT3({id}) {
  useEffect(()=> {
    AOS.init({duration:2000})
}, []);
  // console.log(id);
  useEffect(()=>{
    const link = document.getElementById(id)
    if(link){
      const pElement = link.querySelector('p'); // Select the <p> inside the Link
      pElement.style.backgroundColor = "#152266";
      link.style.color="white";
      // link.style.backgroundColor="#152266" ;
    } 
  })
  return (
    <div className='sidePanel' data-aos="fade-right">
      <div className='innerdiv'>
        <Link id='1' to='/facilityinformation-3'><p>3A. Health Facility Information</p></Link>
        <Link id='2' to='/infrastructure-3'><p>3B. Infrastructure</p></Link>
        <Link id='3' to='/humanresources-3'><p>3C. Human Resources</p></Link>
        <Link id='4' to='/logistics-3'><p>3D. Logistics (Drugs/ Consumables/ Equipment)</p></Link>
        <Link id='5' to='/emergencycareservices-3'><p>3E. Emergency Care Services</p></Link>
        <Link id='6' to='/informationsystem-3'><p>3F. Information System</p></Link>
        <Link id='7' to='/finance-3'><p>3G. Finance</p></Link>
        <Link id='8' to='/leadershipandgovernance-3'><p>3H. Leadership and Governance</p></Link>
        <Link id='9' to='/processpoliciessops-3'><p>3I. Process/ Policies/SOPs</p></Link>
        <Link id='10' to='/referrallinkages-3'><p>3J. Referral Linkages</p></Link>
      </div>
    </div>
  )
}

export default SidePanelHFAT3