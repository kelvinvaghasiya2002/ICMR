import React, { useState, useEffect } from 'react'
import DropDown from './DropDown';

function Table({ tableName }) {
    // console.log(JSON.parse(localStorage.getItem("CompleteForm"))[1]);
    const [rows, setRows] = useState(() => {
        const storedRows = localStorage.getItem(tableName);
        return storedRows ? JSON.parse(storedRows) : [];
    });

    useEffect(() => {
        localStorage.setItem(tableName, JSON.stringify(rows));
    }, [rows]);


    function handlePlusClick() {
        setRows([...rows, { name: '', age: '', sex: 'Male', relationship: '' }]);
    }

    function handleMinusClick() {
        if (rows.length > 1) {
            const newRows = rows.filter((_, rowIndex) => rowIndex !== rows.length - 1);
            setRows(newRows);
        }
    }

    const handleInputChange = (index, field, value) => {
        const newRows = rows.map((row, i) => (
            i === index ? { ...row, [field]: value } : row
        ));
        setRows(newRows);
    };

    return (
        <>
            <div className='tablediv'>
                <table>
                    <tbody>
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
                                        <td>{index + 1}</td>
                                        <td>
                                            <input
                                                className='tableinput'
                                                value={item.name}
                                                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className='tableinput'
                                                value={item.age}
                                                onChange={(e) => handleInputChange(index, 'age', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <DropDown
                                                dropdownItems={["Male", "Female", "Other"]}
                                                name={"table_sex_field"}
                                                value={item.sex}
                                                onChange={(e) => handleInputChange(index, 'sex', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className='tableinput'
                                                value={item.relationship}
                                                onChange={(e) => handleInputChange(index, 'relationship', e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='tablebtn'>
                    <button onClick={handlePlusClick}>+</button>
                    <button onClick={handleMinusClick}>-</button>
                </div>
            </div>
        </>
    )
}

export default Table