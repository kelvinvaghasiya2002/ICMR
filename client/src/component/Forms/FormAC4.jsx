import React from 'react'
import SidePanel from './child-comp/SidePanel'
import Table from './child-comp/Table.jsx'
import { turnOffbutton } from './helpers.js'
import { Link } from 'react-router-dom'

function FormAC4() {
    turnOffbutton();
    return (
        <section id='relationship-with-head'>
            <SidePanel />
            <div className='siteInfo'>
            <div>
                <Table />
            </div>
            <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-trauma&burns">Next</Link></button>
            </div>
        </section>
    )
}

export default FormAC4