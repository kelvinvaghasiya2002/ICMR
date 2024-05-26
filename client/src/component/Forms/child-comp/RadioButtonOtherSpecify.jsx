import React, { useState } from 'react';

export default function RadioButtonOtherSpecify({ CheckboxItems, name, h3, onClick, byDefault }) {
    const [showTextarea, setShowTextarea] = useState(false);

    const handleRadioClick = (item) => {
        if (item === CheckboxItems[CheckboxItems.length - 1]) {
            setShowTextarea(true);
        } else {
            setShowTextarea(false);
        }
        if(onClick){
            onClick(item);
        }
        
    };

    return (
        <div className='block'>
            <h3 className='h3block'>{h3}</h3>
            <form>
                {CheckboxItems.map((item, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                                               {
                      (byDefault === item) ?
                                            <input type="radio" id={item} name={name} value={item} onClick={()=>handleRadioClick(item)} checked />
                                            :
                                            <input type="radio" id={item} name={name} value={item} onClick={()=>handleRadioClick(item)} />
}
                        <label style={{ fontWeight: "400", marginLeft: "0.25vw" }} htmlFor={item}>{item}</label>
                        <br />
                    </div>
                ))}
                {showTextarea && (
                    <div>
                        <textarea style={{marginLeft:"10px"}} rows={3} cols={50} placeholder="Type here"></textarea>
                    </div>
                )}
            </form>
        </div>
    );
}