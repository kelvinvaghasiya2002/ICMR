
import React, { useState } from 'react';

const D2 = ({ columns, initialRows }) => {
    const [rows, setRows] = useState(initialRows);
    const [columnOptions, setColumnOptions] = useState(
        columns.reduce((acc, col) => {
            if (col.type === 'radio' || col.type === 'checkbox') {
                acc[col.key] = col.options || [];
            }
            return acc;
        }, {})
    );

    // const addRow = () => {
    //     const newRow = columns.reduce((acc, col) => {
    //         acc[col.key] = col.type === 'checkbox' ? false : '';
    //         return acc;
    //     }, {});
    //     setRows([...rows, newRow]);
    // };

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

    // const addOption = (columnKey) => {
    //     const newOptions = [...columnOptions[columnKey], ''];
    //     handleOptionChange(columnKey, newOptions);
    // };

    // const updateOption = (columnKey, index, value) => {
    //     const newOptions = [...columnOptions[columnKey]];
    //     newOptions[index] = value;
    //     handleOptionChange(columnKey, newOptions);
    // };

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
            {/* <button onClick={addRow}>Add Row</button> */}
            {/* {columns.map((col, colIndex) => (
                (col.type === 'radio' || col.type === 'checkbox') && (
                    <div key={colIndex}>
                        <h4>{col.label} Options</h4>
                        {columnOptions[col.key].map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => updateOption(col.key, optionIndex, e.target.value)}
                                />
                            </div>
                        ))}
                        <button onClick={() => addOption(col.key)}>Add Option</button>
                    </div>
                )
            ))} */}
        </div>
    );
};

export default D2;
