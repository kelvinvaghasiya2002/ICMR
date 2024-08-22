import React, { useState, useEffect } from "react";
import AOS from "aos";
import { turnOffbutton } from "../helpers";
import setLocalStorage from "../setLocalStorage";
import Heading from "../../Heading/Heading";
import SidePanelCST from "../CST/SidePanelCST";
import InputField from "../child-comp/InputField";

function formFA() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var forma = setLocalStorage("forma", {
    FA1: "",
    FA2: "",
    FA3: "",
    FA4: "",
    FA5: "",
    FA6: "",
  });
  const [formFA, setFormFA] = useState(JSON.parse(forma));
  const [errors, setErrors] = useState({});
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

  return (
    <div>
      <div className="header">
        <div className="burger-menu" onClick={toggleSidebar}>
          &#9776;
        </div>
        <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      </div>
      <section className="form-main">
        {isSidebarVisible && (
          <>
            <SidePanelCST id={"1"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>FA. Details of Responder</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="FA1"
              h3="FA.1 : Name of Respondent:"
              //   onChange={handleChangeWithValidation}
              value={formFA.FA1}
              // regex={/^[A-Za-z ]+$/}
              placeholder="Type here"
              //   required
              //   error={errors.A1}
            />
            <InputField
              name="FA2"
              h3="FA.2 : Respondient ID:"
              //   onChange={handleChangeWithValidation}
              value={formFA.FA2}
              // regex={/^[A-Za-z ]+$/}
              placeholder="Type here"
              required
              //   error={errors.A1}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default formFA;
