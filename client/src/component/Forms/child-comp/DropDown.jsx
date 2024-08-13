import React from 'react'

function DropDown({ dropdownItems, name, h3, onClick, byDefault,errorMsg }) {
    return (
        <div className='block'>
            <h3 className='h3block'>{h3}</h3>
            <div className="dropdown-wrapper">
                <select onChange={onClick} name={name} className="block_selector" id="Block_Name">
                    <option value="" selected disabled>Select an option</option>
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
            {errorMsg && <div className="error-msg">{errorMsg}</div>}
        </div>
    )
}

export default DropDown
