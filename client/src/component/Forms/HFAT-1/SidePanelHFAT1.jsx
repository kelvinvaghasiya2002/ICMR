import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

function SidePanelHFAT1({id}) {
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
    <div className='sidePanel'>
      <div className='innerdiv'>

        <Link id='1' to='/healthfacilityinformation'><p>1A. Health Facility Information</p></Link>
        <Link id='2' to='/infrastructure'><p>1B. Infrastructure</p></Link>
        <Link id='3' to='/humanresources'><p>1C. Human Resources</p></Link>
        <Link id='4' to='/logisticsdrugsconsumablesequipment-1'><p>1D. Logistics (Drugs/ Consumables/ Equipment)</p></Link>
        <Link id='5' to='/emergencycareservices'><p>1E. Emergency Care Services</p></Link>
        <Link id='6' to='/informationsystem'><p>1F. Information System</p></Link>
        <Link id='7' to='/finance'><p>1G. Finance</p></Link>
        <Link id='8' to='/leadershipandgovernance'><p>1H. Leadership and Governance</p></Link>
        <Link id='9' to='/processpoliciessops'><p>1I. Process/ Policies/SOPs</p></Link>
        <Link id='10' to='/referrallinkages'><p>1J. Referral Linkages</p></Link>
      </div>
    </div>
  )
}

export default SidePanelHFAT1