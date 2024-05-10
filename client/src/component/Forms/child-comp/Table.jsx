import React, { useState } from 'react'
import DropDown from './DropDown';

function Table() {
    const [rows, setRows] = useState([{}]);
    function handlePlusClick() {
        console.log("Clice");
        setRows([
            ...rows,
            {}
        ])
    }

    function handleMinusClick() {
        if (rows.length > 0) {
            const newrows = [...rows]
            newrows.pop();
            setRows(newrows);
        }
    }
    return (
        <>
            <table>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Age (years)</th>
                    <th>Sex</th>
                    <th>Relationship With Head of the Household</th>
                </tr>
                {
                    rows.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th><input /></th>
                                <th><input /></th>
                                <th><DropDown dropdownItems={["Male", "Female", "Other"]} name={"table_sex_field"} /></th>
                                <th><input /></th>
                            </tr>
                        )
                    })
                }
            </table>
            <button onClick={handlePlusClick}>+</button>
            <button onClick={handleMinusClick}>-</button>
        </>
    )
}

export default Table