import React, { useState } from 'react';

export default function CheckBoxOtherSpecify({ CheckboxItems, h3 }) {
    const [checkedItems, setCheckedItems] = useState({});
    const [showTextArea, setShowTextArea] = useState(false);

    const handleCheckboxChange = (item) => {
        setCheckedItems({ ...checkedItems, [item]: !checkedItems[item] });
        if (CheckboxItems.indexOf(item) === CheckboxItems.length - 1) {
            setShowTextArea(!showTextArea);
        }
    };

    const handleTextAreaChange = (e) => {
        // Handle changes to the text area here if needed
    };

    return (
        <div className='block'>
            <h3 className='h3block'>{h3}</h3>
            <form>
                {CheckboxItems.map((item, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="checkbox"
                            id={item}
                            name={item}
                            checked={checkedItems[item] || false}
                            onChange={() => handleCheckboxChange(item)}
                        />
                        <label style={{ fontWeight: "400", marginLeft: "0.25vw" }} htmlFor={item}>{item}</label>
                        {(index === CheckboxItems.length - 1 && showTextArea) && (
                            <textarea
                                rows={3}
                                cols={30}
                                style={{ marginLeft: "10px" }}
                                placeholder="Enter your text here"
                                onChange={handleTextAreaChange}
                            />
                        )}
                        <br />
                    </div>
                ))}
            </form>
        </div>
    );
}
