import React from "react";
import InputField from "../child-comp/InputField";
import Radio from "../child-comp/Radio";

const FormFA = ({ formFAData, setFormFAData }) => {
  const handleInputChange = (name, value) => {
    setFormFAData((prevFormFA) => ({
      ...prevFormFA,
      [name]: value,
    }));
  };

  return (
    <>
    
      <div className="formhdr">
        <div>
          <h3>FA. Details of Respondent</h3>
        </div>
      </div>
    <div className="formcontent">
      <InputField
        name="FA1"
        h3="FA.1 : Name of Respondent:"
        onChange={(e) => handleInputChange("FA1", e.target.value)}
        value={formFAData.FA1}
        placeholder="Type here"
      />
      <InputField
        name="FA2"
        h3="FA.2 : Respondient ID:"
        onChange={(e) => handleInputChange("FA2", e.target.value)}
        value={formFAData.FA2}
        placeholder="Type here"
        required
      />
      <Radio
        name="FA3"
        h3="FA.3 : Relationship of respondent with deceased:"
        CheckbobItems={[
          "Brother/Sister",
          "Mother",
          "Father",
          "Grandfather",
          "Grandmother",
          "Other relative",
          "Neighbour/No relation",
          "Unknown",
        ]}
        onChange={(e) => handleInputChange("FA3", e.target.value)}
        value={formFAData.FA3}
      />
      <Radio
        name="FA4"
        h3="FA.4 : Did the respondent live with the deceased during the events that led to death?:"
        onChange={(e) => handleInputChange("FA4", e.target.value)}
        value={formFAData.FA4}
        CheckbobItems={["Yes", "No"]}
        required
      />
      <InputField
        name="FA5"
        h3="FA.5 : Respondent's age in completed years"
        onChange={(e) => handleInputChange("FA5", e.target.value)}
        value={formFAData.FA5}
        placeholder="Type here"
        required
      />
      <Radio
        name="FA6"
        h3="FA.6 : Repondent's sex:"
        CheckbobItems={["Male", "Female"]}
        onChange={(e) => handleInputChange("FA6", e.target.value)}
        value={formFAData.FA6}
        required
      />
    </div>
    </>
  );
};

export default FormFA;
