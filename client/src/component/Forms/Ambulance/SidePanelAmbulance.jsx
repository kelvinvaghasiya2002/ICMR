import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';

function SidePanelAmbulance({id}) {
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
        <Link id='1' to='/facilityinformation'><p>Facility Information</p></Link>
      </div>
    </div>
  )
}

export default SidePanelAmbulance