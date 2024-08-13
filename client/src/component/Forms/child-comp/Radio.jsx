import React, { useEffect, useState, useRef } from 'react';

export default function Radio({ CheckbobItems, name, h3, onClick, byDefault, other, otherArray, setter, style, st, required, errorMsg }) {
    const [otherSpecify, setOtherSpecify] = useState("");
    const [error, setError] = useState("");
    const [selectedValue, setSelectedValue] = useState(byDefault || ""); // Track selected radio button
    const radioRefs = useRef([]);

    const handleRadioClick = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        const otherSpecifyRadio = document.getElementById(event.target.value);
        document.getElementById(`${event.target.value}otherInput`).disabled = false;

        if (document.getElementById(`${event.target.value}${name}otherInput`)) {
            console.log(`${event.target.value}${name}otherInput`);
            document.getElementById(`${event.target.value}${name}otherInput`).disabled = false;
        }

        CheckbobItems.forEach(element => {
            if (element !== event.target.value) {
                if (document.getElementById(`${element}${name}otherInput`)) {
                    document.getElementById(`${element}${name}otherInput`).disabled = true;
                }
            }
        });

        if (required) {
            validateRadioSelection();
        }
    }

    useEffect(() => {
        if (required) {
            validateRadioSelection();
        }
    }, []);

    const validateRadioSelection = () => {
        const selected = radioRefs.current.some(ref => ref && ref.checked);
        if (!selected) {
            setError(errorMsg || "(Please select an option)");
        } else {
            setError("");
        }
    };

    return (
        <>
            <div className='block' style={style}>
                <h3 className='h3block'>{h3}</h3>
                <form>
                    {CheckbobItems.map((item, index) => (
                        <div key={index} className='radio_opts'>
                            {otherArray && otherArray[index] ? (
                                <>
                                    <input
                                        id={`${item}${name}`}
                                        ref={el => radioRefs.current[index] = el}
                                        onClick={handleRadioClick}
                                        value={item}
                                        type="radio"
                                        name={name}
                                    />
                                    <label className='radio_labels' htmlFor={item} >{item}</label><br/>
                                    {/* <span style={{ fontSize: "1.2vw" }}>{item}</span> */}
                                    <input
                                        className='others blockinput'
                                        onChange={(event) => {
                                            setOtherSpecify(event.target.value);
                                            setter(prevValue => ({
                                                ...prevValue,
                                                [event.target.name]: `${item}:${event.target.value}`
                                            }));
                                        }}
                                        style={st}
                                        type="text"
                                        name={name}
                                        value={document.getElementById(`${item}${name}`)?.checked ? otherSpecify : ""}
                                        id={`${item}${name}otherInput`}
                                        disabled={selectedValue !== item}
                                    />
                                </>
                            ) : (
                                <>
                                    <input
                                        type="radio"
                                        id={`${item}${name}`}
                                        ref={el => radioRefs.current[index] = el}
                                        name={name}
                                        value={item}
                                        onClick={onClick}
                                        defaultChecked={byDefault === item}
                                    />
                                    <label className='radio_labels' htmlFor={`${item}${name}`} >{item}</label><br/>
                                </>
                            )}
                        </div>
                    ))}
                </form>
                {error && <div className="error-msg">{error}</div>}
            </div>
        </>
    );
}
