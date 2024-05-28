import React, { useState, useEffect } from 'react'

function E1({ tableName }) {
    const [rows, setRows] = useState(() => {
        const storedRows = localStorage.getItem("H3E1");
        return storedRows ? JSON.parse(storedRows) : [{ Adult: '', Pediatric: '', Broughtdead: '', Deathafterarrival: '',MLC : '' }];
    });

    useEffect(() => {
        localStorage.setItem("H3E1", JSON.stringify(rows));
    }, [rows]);


    function handlePlusClick() {
        setRows([...rows, { Adult: '', Pediatric: '', Broughtdead: '', Deathafterarrival: '',MLC : '' }]);
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
                            <th>Adult ( greater than 18Years)</th>
                            <th>Pediatric</th>
                            <th>Brought dead</th>
                            <th>Death after arrival</th>
                            <th>MLC</th>
                        </tr>
                        {
                            rows.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                className='tableinput'
                                                value={item.Adult}
                                                onChange={(e) => handleInputChange(index, 'Adult', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className='tableinput'
                                                value={item.Pediatric}
                                                onChange={(e) => handleInputChange(index, 'Pediatric', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className='tableinput'
                                                value={item.Broughtdead	}
                                                onChange={(e) => handleInputChange(index, 'Broughtdead', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className='tableinput'
                                                value={item.Deathafterarrival}
                                                onChange={(e) => handleInputChange(index, 'Deathafterarrival', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className='tableinput'
                                                value={item.MLC}
                                                onChange={(e) => handleInputChange(index, 'MLC', e.target.value)}
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

export default E1