import React, { useState, useEffect } from "react";

const C1 = ({ columns, initialRows, tableName, labels }) => {
  const [rows, setRows] = useState(initialRows);
  const [columnOptions, setColumnOptions] = useState(
    columns.reduce((acc, col) => {
      if (col.type === "radio" || col.type === "checkbox") {
        acc[col.key] = col.options || [];
      }
      return acc;
    }, {})
  );

  useEffect(() => {
    let data = localStorage.getItem(tableName);
    if (data) {
      setRows(JSON.parse(data));
    } else {
      setRows(initialRows);
      setStorage();
    }
  }, []);

  const setStorage = (newRows) => {
    // setRows(localStorage.setItem(tableName, JSON.stringify(rows)));
    localStorage.setItem(tableName, JSON.stringify(newRows ?? rows));
  };

  //   useEffect(() => {
  //     // localStorage.setItem("H3C1",JSON.stringify(rows))
  //     localStorage.setItem(tableName, JSON.stringify(rows));
  //   }, [rows]);

  const handleInputChange = (rowIndex, columnKey, value) => {
    var newRows = [...rows];
    if (columnKey === "Manpower" && value === "") {
      if (rowIndex === labels.length - 1) {
        newRows[rowIndex] = {
          Manpower: "",
          otherSpecify: "",
          Number: "",
          availability: "",
          onSite: "",
          onCall: "",
        };
      } else {
        newRows[rowIndex] = {
          Manpower: "",
          Number: "",
          availability: "",
          onSite: "",
          onCall: "",
        };
      }
    } else {
      newRows[rowIndex][columnKey] = value;
    }
    setRows(newRows);
    setStorage(newRows);
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
                  {col.type === "text" &&
                    (labels[rowIndex] !== "Other" ? (
                      <span>
                        <input
                          type="checkbox"
                          checked={row[col.key] != "" ? true : false}
                          onChange={(e) => {
                            handleInputChange(
                              rowIndex,
                              col.key,
                              e.target.checked ? labels?.[rowIndex] : ""
                            );
                          }}
                        />
                        {labels[rowIndex]}
                      </span>
                    ) : (
                      <span>
                        <input
                          type="checkbox"
                          checked={row[col.key] != "" ? true : false}
                          onChange={(e) => {
                            handleInputChange(
                              rowIndex,
                              col.key,
                              e.target.checked ? labels?.[rowIndex] : ""
                            );
                          }}
                        />
                        <span>Other (Please Specify)</span>
                        <input
                          className="others blockinput"
                          type="text"
                          disabled={!row["Manpower"]}
                          value={row["otherSpecify"]}
                          onChange={(e) =>
                            handleInputChange(
                              rowIndex,
                              "otherSpecify",
                              e.target.value
                            )
                          }
                        />
                      </span>
                    ))}
                  {col.type === "input" && (
                    <input
                      className="tableinput"
                      type="text"
                      value={row[col.key]}
                      disabled={!row["Manpower"]}
                      onChange={(e) =>
                        handleInputChange(rowIndex, col.key, e.target.value)
                      }
                    />
                  )}
                  {col.type === "radio" &&
                    columnOptions[col.key].map((option, optionIndex) => (
                      <label className="lable" key={optionIndex}>
                        <input
                          type="radio"
                          name={`${col.key}-${rowIndex}`}
                          value={option}
                          disabled={!row["Manpower"]}
                          checked={row[col.key] === option}
                          onChange={(e) =>
                            handleInputChange(rowIndex, col.key, e.target.value)
                          }
                        />
                        {option}
                      </label>
                    ))}
                  {col.type === "checkbox" &&
                    columnOptions[col.key].map((option, optionIndex) => (
                      <label className="lable" key={optionIndex}>
                        <input
                          type="checkbox"
                          name={`${col.key}-${rowIndex}`}
                          value={option}
                          checked={row[col.key]?.includes(option)}
                          onChange={(e) => {
                            const value = e.target.value;
                            const newValue = row[col.key].includes(value)
                              ? row[col.key].filter((item) => item !== value)
                              : [...row[col.key], value];
                            handleInputChange(rowIndex, col.key, newValue);
                          }}
                        />
                        {option}
                      </label>
                    ))}
                  {col.type === "select" && (
                    <select
                      value={row[col.key]}
                      onChange={(e) =>
                        handleInputChange(rowIndex, col.key, e.target.value)
                      }
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
