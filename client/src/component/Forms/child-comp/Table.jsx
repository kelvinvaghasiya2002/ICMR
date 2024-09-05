import React, { useState, useEffect } from 'react'
import DropDown from './DropDown';

function Table({ tableName }) {
    // console.log(JSON.parse(localStorage.getItem("CompleteForm"))[1]);
    const forma1 = JSON.parse(localStorage.getItem("forma1"));
    const forma2 = JSON.parse(localStorage.getItem("forma2"));
    const [rows, setRows] = useState(() => {
        const storedRows = localStorage.getItem(tableName);
        return storedRows ? JSON.parse(storedRows) : [{ name: '', age: '', sex: 'Male', MemberID: `${forma1?.AA2}_${forma2?.AB5}_${1}` }];
    });

    useEffect(() => {
        localStorage.setItem(tableName, JSON.stringify(rows));
    }, [rows]);

    function handlePlusClick() {
        setRows([...rows, { name: '', age: '', sex: 'Male', MemberID: `${forma1?.AA2}_${forma2.AB5}_${rows.length+1}` }]);
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
                            <th>Member ID</th>
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
                                                byDefault={item.sex}
                                                onClick={(e) => handleInputChange(index, 'sex', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className='tableinput'
                                                value={item.MemberID}
                                                style={{cursor : "not-allowed"}}
                                                readOnly
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