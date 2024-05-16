import React from 'react'

function DropDown({ dropdownItems, name , h3 }) {
    return (
        <>
            <div className='block'>
                <h3 className='h3block'>{h3}</h3>
                <div>
                    <select name={name} id="Block_Name">
                        {dropdownItems.map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </>

    )
}

export default DropDown