import React, { useState } from 'react';

export default function CheckboxTextarea({ items, h3 }) {
    const [checkedItems, setCheckedItems] = useState({});
    const [showTextAreas, setShowTextAreas] = useState({});

    const handleCheckboxChange = (item) => {
        setCheckedItems({ ...checkedItems, [item]: !checkedItems[item] });
        setShowTextAreas({ ...showTextAreas, [item]: !showTextAreas[item] });
    };

    const handleTextAreaChange = (e, item) => {
        // Handle changes to the text area here if needed
    };

    return (
        <div className='block'>
            <h3 className='h3block'>{h3}</h3>
            <form>
                {items.map((item, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="checkbox"
                            id={item}
                            name={item}
                            checked={checkedItems[item] || false}
                            onChange={() => handleCheckboxChange(item)}
                        />
                        <label style={{ fontWeight: "400", marginLeft: "0.25vw" }} htmlFor={item}>{item}</label>
                        {showTextAreas[item] && (
                            <textarea
                                rows={3}
                                cols={30}
                                style={{ marginLeft: "10px" }}
                                placeholder="Enter your text here"
                                onChange={(e) => handleTextAreaChange(e, item)}
                            />
                        )}
                        <br />
                    </div>
                ))}
            </form>
        </div>
    );
}
