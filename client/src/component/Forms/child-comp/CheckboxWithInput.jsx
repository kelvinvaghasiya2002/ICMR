import React, { useEffect, useState } from "react";

function CheckboxWithInput({
  CheckbobItems,
  name,
  h3,
  setFunction,
  StateValue,
  array,
  errorMsg,
  otherArray,
}) {
  const [inputs, setInputs] = useState(CheckbobItems.map(() => "")); // Store input values for each checkbox
  const [error, setError] = useState("");

  const handleInputChange = (index) => (event) => {
    const value = event.target.value;
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    const newArray = [...array];
    if (newArray[index] !== "" || value !== "") {
      newArray[index] = `${CheckbobItems[index]}: ${value}`;
    } else {
      newArray[index] = "";
    }

    setFunction({
      ...StateValue,
      [name]: newArray,
    });

    validateCheckboxGroup(newArray);
  };

  const handleClick = (index) => (event) => {
    const { value } = event.target;
    const newArray = [...array];
    if (newArray[index] === "") {
      newArray[index] = value;
    } else {
      newArray[index] = "";
      const newInputs = [...inputs];
      newInputs[index] = "";
      setInputs(newInputs);
    }

    setFunction({
      ...StateValue,
      [name]: newArray,
    });
    validateCheckboxGroup(newArray);
  };

  const validateCheckboxGroup = (newArray) => {
    if (newArray.every((item) => item === "")) {
      setError(errorMsg || "Select at least one option and specify an input");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    if (array.length === 0) {
      for (let i = 0; i < CheckbobItems.length; i++) {
        array.push("");
      }
    } else {
      const newInputs = array.map((item) => item.split(": ")[1] || "");
      setInputs(newInputs);
    }
  }, [CheckbobItems, array]);

  return (
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
              checked={array[index] !== ""}
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
            {otherArray?.[index] === 0 && otherArray ? (
              ""
            ) : (
              <input
                type="text"
                className="blockinput others"
                value={inputs[index]}
                onChange={handleInputChange(index)}
                disabled={array[index] === ""}
                placeholder="Type here"
                style={{ marginLeft: "0.5vw" }}
              />
            )}
          </div>
        ))}
      </form>
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}

export default CheckboxWithInput;
