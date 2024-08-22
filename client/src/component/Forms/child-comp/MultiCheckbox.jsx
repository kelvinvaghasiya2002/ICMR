import React from 'react'

function MultiCheckbox({ checkboxitems, name, h3, other, setFunction, StateValue, array }) {

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

    return (
        <div className='block'>
            <h3 className='h3block'>{h3}</h3>
            {checkboxitems.map((item, index) => (
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
            ))}
        </div>
    )
}

export default MultiCheckbox