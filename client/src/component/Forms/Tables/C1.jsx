import React, { useState , useEffect } from 'react';

const C1 = ({ columns, initialRows , tableName }) => {
    const [rows, setRows] = useState(initialRows);
    console.log(rows);
    const [columnOptions, setColumnOptions] = useState(
        columns.reduce((acc, col) => {
            if (col.type === 'radio' || col.type === 'checkbox') {
                acc[col.key] = col.options || [];
            }
            return acc;
        }, {})
    );

    useEffect(()=>{
        // localStorage.setItem("H3C1",JSON.stringify(rows))
        localStorage.setItem(tableName,JSON.stringify(rows))

    },[rows])

    const handleInputChange = (rowIndex, columnKey, value) => {
        const newRows = [...rows];
        newRows[rowIndex][columnKey] = value;
        setRows(newRows);
    };

    const handleOptionChange = (columnKey, options) => {
        setColumnOptions({
            ...columnOptions,
            [columnKey]: options,
        });
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>
                                    {
                                        col.type === 'text' && (
                                            <span>{row[col.key]}</span>
                                        )
                                    }
                                    {col.type === 'input' && (
                                        <input
                                        className='tableinput'
                                            type="text"
                                            value={row[col.key]}
                                            onChange={(e) => handleInputChange(rowIndex, col.key, e.target.value)}
                                        />
                                    )}
                                    {col.type === 'radio' && (
                                        columnOptions[col.key].map((option, optionIndex) => (
                                            <label className='lable' key={optionIndex}>
                                                <input
                                                    type="radio"
                                                    name={`${col.key}-${rowIndex}`}
                                                    value={option}
                                                    checked={row[col.key] === option}
                                                    onChange={(e) => handleInputChange(rowIndex, col.key, e.target.value)}
                                                />
                                                {option}
                                            </label>
                                        ))
                                    )}
                                    {col.type === 'checkbox' && (
                                        columnOptions[col.key].map((option, optionIndex) => (
                                            <label className='lable' key={optionIndex}>
                                                <input
                                                    type="checkbox"
                                                    name={`${col.key}-${rowIndex}`}
                                                    value={option}
                                                    checked={row[col.key].includes(option)}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        const newValue = row[col.key].includes(value)
                                                            ? row[col.key].filter(item => item !== value)
                                                            : [...row[col.key], value];
                                                        handleInputChange(rowIndex, col.key, newValue);
                                                    }}
                                                />
                                                {option}
                                            </label>
                                        ))
                                    )}
                                    {col.type === 'select' && (
                                        <select
                                            value={row[col.key]}
                                            onChange={(e) => handleInputChange(rowIndex, col.key, e.target.value)}
                                        >
                                            {col.options.map((option, optionIndex) => (
                                                <option key={optionIndex} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default C1;
