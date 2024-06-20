import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import OutSideClick from '../../utils/OutSideClick';

function FillFormMenu({menuState , setMenuState}) {
    const menuRef = useRef();
    
    OutSideClick(menuRef , setMenuState);

    return (
        <div ref={menuRef} className='container' style={{ display: menuState ? "block" : "none" }} >

            <div style={{ padding: "2%"}}>
                <Link to="/formsaa"><h3 onClick={()=>{setMenuState(false)}}>Community Survey Tool</h3></Link>
                <Link to="/healthfacilityinformation"><h3 onClick={()=>{setMenuState(false)}}>Health Facility Assessment Tool 1:  District Hospital/Tertiary Care (Public or Private)</h3></Link>
                <Link to="/facilityinformation-2"><h3 onClick={()=>{setMenuState(false)}}>Health Facility Assessment Tool 2: Community Health Centre</h3></Link>
                <Link to="/facilityinformation-3"><h3 onClick={()=>{setMenuState(false)}}>Health Facility Assessment Tool 3: Primary Health Centre</h3></Link>
                <Link to="/facilityinformation"><h3 onClick={()=>{setMenuState(false)}}>GAP Assessment Tool – Ambulance at Facility Level</h3></Link>
            </div>

        </div>
    )
}

export default FillFormMenu