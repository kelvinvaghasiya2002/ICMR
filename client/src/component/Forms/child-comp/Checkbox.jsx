import React, { useEffect, useState } from 'react';

function Checkbox({ CheckbobItems, name, h3, other, time, setFunction, StateValue, array }) {
    const [otherSpecify, setOtherSpecify] = useState("");
    const [otherSpecifyChecked, setOtherSpecifyChecked] = useState(false);
    const [error, setError] = useState("");

    // Function to handle changes in the 'Other' text input
    const handleChange = (event) => {
        setOtherSpecify(event.target.value);
        array[array.length - 1] = event.target.value;
        validateCheckboxGroup(array);
    }

    // Function to handle checkbox click events
    const handleClick = (index) => {
        return (
            (event) => {
                const { value } = event.target;
                if (array[index] === "") {
                    array[index] = value;
                } else {
                    array[index] = "";
                }
                const updatedStateValue = {
                    ...StateValue,
                    [event.target.name]: array
                }
                setFunction(updatedStateValue);
                validateCheckboxGroup(array);
            }
        )
    }

    // Function to handle checkbox 'Other' checkbox click
    const handleCheckboxClick = () => {
        const otherSpecifyCheckBox = document.getElementById(`${name}otherSpecifyCheckBox`);
        if (otherSpecifyCheckBox.checked) {
            document.getElementById(name).disabled = false;
            setOtherSpecifyChecked(true);
        } else {
            setOtherSpecify("");
            array[array.length - 1] = "";
            document.getElementById(name).disabled = true;
            setOtherSpecifyChecked(false);
        }
        validateCheckboxGroup(array);
    }

    // Function to validate checkbox group
    const validateCheckboxGroup = (newArray) => {
        if (!other && newArray.every(item => item === "")) {
            setError("Select at least one option");
        } else if (other && newArray.slice(0, -1).every(item => item === "") && newArray[newArray.length - 1] === "") {
            setError("Select at least one option or specify 'Other'");
        } else {
            setError("");
        }
    };

    // useEffect to validate on mount and when StateValue changes
    useEffect(() => {
        validateCheckboxGroup(StateValue[name]);
    }, [StateValue[name]]);

    return (
        <>
            <div className='block'>
                <h3 className='h3block'>{h3}</h3>
                <form onSubmit={(event) => {
                    event.preventDefault();
                }}>
                    {CheckbobItems.map((item, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.8vw" }}>
                            <input
                                onChange={handleClick(index)}
                                type="checkbox"
                                id={item}
                                name={name}
                                value={item}
                                checked={array.includes(item)}
                            />
                            <label style={{ fontSize: "1.1vw", fontWeight: "400", marginLeft: "0.25vw", color: "gray" }} htmlFor={item}>{item}</label>
                            <br />
                            {time && <input type="time" className='blockinput others' />}
                        </div>
                    ))}
                    {other && (
                        <>
                            <input
                                id={`${name}otherSpecifyCheckBox`}
                                onChange={handleCheckboxClick}
                                type="checkbox"
                                name="checkbox"
                                checked={otherSpecifyChecked}
                            />
                            <span style={{ fontSize: "1.1vw", color: "gray", paddingLeft: "0.2vw" }}>Other (Specify)</span>
                            <input
                                className='others blockinput'
                                onChange={handleChange}
                                type="text"
                                name="otherSpecify"
                                value={array[array.length - 1]}
                                id={name}
                                disabled={!otherSpecifyChecked}
                            />
                        </>
                    )}
                </form>
                {error && <div className="error-msg">{error}</div>}
            </div>
        </>
    )
}

export default Checkbox;
