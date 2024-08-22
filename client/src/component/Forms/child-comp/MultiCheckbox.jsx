import React, { useEffect, useState } from 'react'

function MultiCheckbox({ checkboxitems, name, h3, otherArray, setFunction, StateValue, array }) {

    useEffect(() => {
        if (!otherArray && array.length === 0) {
            for (var i = 0; i < checkboxitems.length; i++) {
                array.push("");
            }
            // console.log(array);
        } else if (otherArray && array.length === 1) {
            for (var i = 0; i < checkboxitems.length; i++) {
                array.push("");
            }
        }
        // array[array.length - 1] === null || array[array.length - 1] === "" ? setOtherSpecifyChecked(false) : setOtherSpecifyChecked(true);

    }, [])

    const handleClick = (index) => {
        return (
            (event) => {
                const { value } = event.target;
                if (array[index] === "" || !array[index]) {
                    array[index] = value;
                } else {
                    array[index] = "";
                }
                StateValue = {
                    ...StateValue,
                    [event.target.name]: array
                }
                setFunction(StateValue)
            }
        )
    }

    const handleChange = (index) => {
        return (
            (event) => {
                const { value } = event.target;
                array[index] = value;
                StateValue = {
                    ...StateValue,
                    [name]: array
                }
                setFunction(StateValue)
            }
        )
    }

    const handleOtherCheckboxClick = (item)=>{
        return (
            (event)=>{
                const checkbox = document.getElementById(`${item}`);
                const input = document.getElementById(`${item}OtheSpecify`);
                if(checkbox.checked) input.disabled = false;
                else input.disabled = true
            }
        )
    }

    return (
        <div className='block'>
            <h3 className='h3block'>{h3}</h3>
            {checkboxitems.map((item, index) => (
                (otherArray[index] === 0) ?
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
                    </div>
                    :
                    <div key={index}
                        style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.8vw" }}
                    >

                        <input
                            onChange={handleOtherCheckboxClick(item)}
                            type="checkbox"
                            id={item}
                            name={name}
                            value={item}
                            // checked={(array[index]==="" ? false : true)}
                        />

                        <label style={{ fontSize: "1.1vw", fontWeight: "400", marginLeft: "0.25vw", color: "gray" }} htmlFor={item}>{item}</label>
                        <br />

                        <input
                            className='others blockinput'
                            onChange={handleChange(index)}
                            type="text"
                            name="otherSpecify"
                            value={array[index]}
                            id={`${item}OtheSpecify`}
                            disabled
                        />
                    </div>
            ))}
        </div>
    )
}

export default MultiCheckbox