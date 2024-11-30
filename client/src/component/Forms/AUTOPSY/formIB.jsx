import React, { useState, useEffect } from "react";
import AOS from "aos";
import { handleChange, turnOffbutton } from "../helpers";
import setLocalStorage, { getLocalStorage } from "../setLocalStorage";
import Heading from "../../Heading/Heading";
import SidePanelCST from "../CST/SidePanelCST";
import InputField from "../child-comp/InputField";
import SidePanelAutopsy from "./sideBarAutopsy";
import Checkbox from "../child-comp/Checkbox";
import Radio from "../child-comp/Radio";
import Buttons from "../child-comp/Buttons";
import OverlayCard from "../OverlayCard";
import { validateNumber, validateRequired } from "../fv";
import useFormValidation from "../../../utils/custom_validation_hook";
import LastButton from "../child-comp/LastButton";

function FormIB() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formib = setLocalStorage("formib", {
    IB1: "",
    IB2: "",
    IB3: "",
    IB4: "",
    IB5: "",
    IB6: "",
    IB7: "",
    IB8: "",
    IB9: "",
    IB10: "",
    IB11: "",
    IB12: "",
  });
  const [formIB, setFormIB] = useState(JSON.parse(formib));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formIB, [
    "IB1",
    "IB2",
    "IB3",
    "IB4",
    "IB5",
    "IB6",
    "IB7",
    "IB8",
    "IB9",
    "IB10",
    "IB11",
    "IB12",
  ]);

  const [showOverlay, setShowOverlay] = useState(false);

  // --toggle--
  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth > 1024
  );
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleResize = () => {
    if (window.innerWidth >= 1025) {
      setSidebarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = "";

    setFormIB((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "IB1":
      case "IB2":
      case "IB3":
      case "IB4":
      case "IB5":
      case "IB6":
      case "IB7":
      case "IB8":
      case "IB9":
      case "IB10":
      case "IB11":
      case "IB12":
        error = error || validateRequired(validatedValue);
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  return (
    <div>
      <div className="header">
        <div className="burger-menu" onClick={toggleSidebar}>
          &#9776;
        </div>
        <Heading h2="Verbal Autopsy Tools"></Heading>
      </div>
      <section className="form-main">
        {isSidebarVisible && (
          <>
            {/* <SidePanelCST id={"1"} /> */}
            <SidePanelAutopsy id={"19"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>HD : Tobacco, Alcohol and Diet</h3>
            </div>
          </div>
          <div className="formcontent">
            <Radio
              name="IB1"
              h3="IB.1 Did she have a caesarean delivery?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB1}
              errorMsg={errors.IB1}
            />
            <Radio
              name="IB2"
              h3="IB.2 Did she have too much bleeding at the beginning of labour pain?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB2}
              errorMsg={errors.IB2}
            />
            <Radio
              name="IB3"
              h3="IB.3 Did she have too much bleeding during labour (before delivering the baby)?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB3}
              errorMsg={errors.IB3}
            />
            <Radio
              name="IB4"
              h3="IB.4 Did she have too much bleeding after delivering the baby?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB4}
              errorMsg={errors.IB4}
            />
            <Radio
              name="IB5"
              h3="IB.5 Did she have prolonged labour >12hrs?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB5}
              errorMsg={errors.IB5}
            />
            <Radio
              name="IB6"
              h3="IB.6 Did she have difficulty in delivering the baby?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB6}
              errorMsg={errors.IB6}
            />
            <Radio
              name="IB7"
              h3="IB.7 Did she have a forceps or vacuum delivery?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB7}
              errorMsg={errors.IB7}
            />
            <Radio
              name="IB8"
              h3="IB.8 Did she have difficulty in delivering the placenta?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB8}
              errorMsg={errors.IB8}
            />
            <Radio
              name="IB9"
              h3="IB.9 Did she have fits and loss of consciousness?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB9}
              errorMsg={errors.IB9}
            />
            <Radio
              name="IB10"
              h3="IB.10 Did she have fits during pregnancy/during labour or after labour?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB10}
              errorMsg={errors.IB10}
            />
            <Radio
              name="IB11"
              h3="IB.11 Did she have fever?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB11}
              errorMsg={errors.IB11}
            />
            <Radio
              name="IB12"
              h3="IB.12 Did she have foul smelling discharge?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIB)}
              byDefault={formIB.IB12}
              errorMsg={errors.IB12}
            />

            <div className="button-container">
              {/* <Buttons
                formName="formib"
                formData={formHD}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formHB"
                next="/formHD"
                // validateForm={validateForm}
              /> */}
              <LastButton
                formName="formib"
                formData={formIB}
                prev="/formHC"
                MainForm={"Autopsy"}
                // validateForm={validateForm}
                formType="autopsy"
              />

              <OverlayCard
                isVisible={!isValid}
                message="(Please fill all required fields to proceed)"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormIB;
