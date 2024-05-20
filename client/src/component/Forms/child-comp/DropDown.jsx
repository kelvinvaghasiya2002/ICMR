import React from 'react'

function DropDown({ dropdownItems, name , h3 ,onClick , byDefault}) {
    return (
        <>
            <div className='block'>
                <h3 className='h3block'>{h3}</h3>
                <div>
                    <select onChange={onClick} name={name} id="Block_Name">
                        {dropdownItems.map((item, index) => {
                            return (
                                (byDefault === item) ? 
                                <option  key={index} value={item} selected>{item}</option>
                                :
                                <option  key={index} value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </>

    )
}

export default DropDown