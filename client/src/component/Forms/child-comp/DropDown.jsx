import React from 'react'

function DropDown({ dropdownItems, name }) {
    return (
        <div>
            <select name={name} id="Block_Name">
                {dropdownItems.map((item, index) => {
                    return (
                        <option key={index} value={item}>{item}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default DropDown