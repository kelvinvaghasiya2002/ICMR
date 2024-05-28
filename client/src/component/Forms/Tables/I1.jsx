import React, { useEffect, useState } from 'react';


const E1 = ({ columns, initialRows , tableName}) => {
    const [rows, setRows] = useState(initialRows);
    const [columnOptions, setColumnOptions] = useState(
        columns.reduce((acc, col) => {
            acc[col.key] = col.options || [];
            return acc;
        }, {})
    );

    useEffect(()=>{
        localStorage.setItem(tableName , JSON.stringify(rows))
    },[rows])

    const addRow = () => {
        const newRow = columns.reduce((acc, col) => {
            acc[col.key] = col.type === 'checkbox' ? [] : '';
            return acc;
        }, {});
        setRows([...rows, newRow]);
    };

    const removeRow = () => {
        if (rows.length > 1) {
            const newRows = rows.filter((_, rowIndex) => rowIndex !== rows.length - 1);
            setRows(newRows);
        }
    };

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

    const addOption = (columnKey) => {
        const newOptions = [...columnOptions[columnKey], ''];
        handleOptionChange(columnKey, newOptions);
    };

    const updateOption = (columnKey, index, value) => {
        const newOptions = [...columnOptions[columnKey]];
        newOptions[index] = value;
        handleOptionChange(columnKey, newOptions);
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
                                    {col.type === 'text' && (
                                        <span>{row[col.key]}</span>
                                    )}
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
                                            <label className='label' key={optionIndex}>
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
                                            <label className='label' key={optionIndex}>
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

export default E1;

