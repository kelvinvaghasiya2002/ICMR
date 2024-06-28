import React from 'react'

function DropDown({ dropdownItems, name, h3, onClick, byDefault }) {
    return (
        <div className='block'>
            <h3 className='h3block'>{h3}</h3>
            <div className="dropdown-wrapper">
                <select onChange={onClick} name={name} className="block_selector" id="Block_Name">
                    {dropdownItems.map((item, index) => {
                        return (
                            // <option key={index} value={item} selected={byDefault === item}>{item}</option>
                            (byDefault === item) ? 
                                <option  key={index} value={item} selected>{item}</option>
                                :
                                <option  key={index} value={item}>{item}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default DropDown
