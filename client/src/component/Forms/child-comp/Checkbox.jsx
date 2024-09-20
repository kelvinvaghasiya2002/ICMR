import React, { useEffect, useState } from "react";

function Checkbox({
  CheckbobItems,
  name,
  h3,
  other,
  time,
  setFunction,
  StateValue,
  array,
  errorMsg,
}) {
  const [otherSpecify, setOtherSpecify] = useState("");
  const [otherSpecifyChecked, setOtherSpecifyChecked] = useState(false);
  const [error, setError] = useState("");

  // Function to handle changes in the 'Other' text input
  const handleChange = (event) => {
    const value = event.target.value;
    setOtherSpecify(value);

    const newArray = [...array];
    if (otherSpecifyChecked) {
      // if (newArray.includes('Other (Specify)')) {
      //     newArray[newArray.indexOf('Other (Specify)')] = value;
      if (other) {
        newArray[newArray.length - 1] = value;
      } else {
        newArray.push(value);
      }
    }

    setFunction({
      ...StateValue,
      [name]: newArray,
    });
    // console.log("onChange");

    validateCheckboxGroup(newArray);
  };

  const handleClick = (index) => {
    return (event) => {
      const { value } = event.target;
      console.log(array);
      if (array[index] === "" || !array[index]) {
        array[index] = value;
      } else {
        array[index] = "";
      }
      StateValue = {
        ...StateValue,
        [event.target.name]: array,
      };
      setFunction(StateValue);
      validateCheckboxGroup(array);
    };
  };

  const handleCheckboxClick = () => {
    const otherSpecifyCheckBox = document.getElementById(
      `${name}otherSpecifyCheckBox`
    );
    if (otherSpecifyCheckBox.checked == true) {
      console.log(otherSpecifyCheckBox.checked);
      document.getElementById(name).disabled = false;
      setOtherSpecifyChecked(!otherSpecifyChecked);
    } else {
      setOtherSpecify("");
      array[array.length - 1] = "";
      document.getElementById(name).disabled = true;
    }
    setOtherSpecifyChecked(!otherSpecifyChecked);
    // validateCheckboxGroup(newArray);
  };

  // const validateCheckboxGroup = (newArray) => {
  //     if (!other && newArray.length === 0) {
  //         setError("Select at least one option");
  //     } else if (other && newArray.slice(0, -1).length === 0 && newArray[newArray.length - 1] === "") {
  //         setError("Select at least one option or specify 'Other'");
  //     } else {
  //         setError("");
  //     }
  // };
  const validateCheckboxGroup = (newArray) => {
    if (!other && newArray.every((item) => item === "")) {
      setError(errorMsg || "Select at least one option");
    } else if (
      other &&
      newArray.slice(0, -1).every((item) => item === "") &&
      newArray[newArray.length - 1] === "" &&
      otherSpecify === ""
    ) {
      setError(errorMsg || "Select at least one option or specify 'Other'");
    } else {
      setError("");
    }
  };

  // useEffect to validate on mount and when StateValue changes
  useEffect(() => {
    if (!other && array.length === 0) {
      for (var i = 0; i < CheckbobItems.length; i++) {
        array.push("");
      }
      // console.log(array);
    } else if (other && array.length === 1) {
      for (var i = 0; i < CheckbobItems.length; i++) {
        array.push("");
      }
    }
    array[array.length - 1] === null || array[array.length - 1] === ""
      ? setOtherSpecifyChecked(false)
      : setOtherSpecifyChecked(true);
  }, []);

  return (
    <>
      <div className="block">
        <h3 className="h3block">{h3}</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {CheckbobItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "0.8vw",
              }}
            >
              <input
                onChange={handleClick(index)}
                type="checkbox"
                id={item}
                name={name}
                value={item}
                checked={array.includes(item) || array[index].startsWith(item)}
              />
              <label
                style={{
                  fontSize: "1.1vw",
                  fontWeight: "400",
                  marginLeft: "0.25vw",
                  color: "gray",
                }}
                htmlFor={item}
              >
                {item}
              </label>
              <br />
              {time && (
                <input
                  type="time"
                  className="blockinput others"
                  onChange={(event) => {
                    const newArray = [...array];
                    newArray[index] = `${item}:- ${event.target.value}`;
                    setFunction({
                      ...StateValue,
                      [name]: newArray,
                    });
                    validateCheckboxGroup(newArray);
                  }}
                />
              )}
            </div>
          ))}
          {other && (
            <>
              <input
                id={`${name}otherSpecifyCheckBox`}
                onChange={handleCheckboxClick}
                type="checkbox"
                name="checkbox"
                checked={otherSpecifyChecked}
              />
              <span
                style={{
                  fontSize: "1.1vw",
                  color: "gray",
                  paddingLeft: "0.2vw",
                }}
              >
                Other (Specify)
              </span>
              <input
                className="others blockinput"
                onChange={handleChange}
                type="text"
                name="otherSpecify"
                value={otherSpecify}
                id={name}
                disabled={!otherSpecifyChecked}
              />
            </>
          )}
        </form>
        {/* <div className="error-msg">{error}Hello</div> */}
        {error && <div className="error-msg">{error}</div>}
      </div>
    </>
  );
}

export default Checkbox;
