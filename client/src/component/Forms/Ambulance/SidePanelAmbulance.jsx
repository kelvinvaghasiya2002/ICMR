import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

function SidePanelAmbulance({id}) {
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
    <div className='sidePanel'data-aos="fade-right">
      <div className='innerdiv'>
        <Link id='1' to='/facilityinformation'><p>Facility Information</p></Link>
      </div>
    </div>
  )
}

export default SidePanelAmbulance