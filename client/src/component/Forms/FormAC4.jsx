import React from 'react'
import SidePanel from './child-comp/SidePanel'
import Table from './child-comp/Table.jsx'
import { turnOffbutton } from './helpers.js'

function FormAC4() {
    turnOffbutton();
    return (
        <section id='relationship-with-head'>
            <SidePanel />
            <div>
                <Table />
            </div>
            <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-trauma&burns">Next</Link></button>
        </section>
    )
}

export default FormAC4